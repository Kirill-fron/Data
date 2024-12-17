"use client";

import React, { useState, useEffect } from "react";
import { DataCenterProps, MapDataItem } from "@/types";
import BtnDiagram from "./UI/BtnDiagram";
import getMapData from "@/api/map-data";

const Diagram: React.FC<DataCenterProps> = ({}) => {
  const [data, setData] = useState<MapDataItem[]>([]);
  const [groups, setGroups] = useState<any[]>([]);
  const [totalNodes, setTotalNodes] = useState<number>(0);

  useEffect(() => {
    getMapData().then((data) => {
      setData(data);
      const groupedData = groupDataByAs(data);
      setGroups(groupedData);
      setTotalNodes(data.length);
    });
  }, []);

  const groupDataByAs = (data: MapDataItem[]) => {
    const groups = data.reduce((acc: Record<string, MapDataItem[]>, item) => {
      const as = item.as;
      if (acc[as]) {
        acc[as].push(item);
      } else {
        acc[as] = [item];
      }
      return acc;
    }, {});
    return Object.entries(groups)
      .sort((a, b) => b[1].length - a[1].length)
      .slice(0, 6);
  };

  const getColor = (percentage: number) => {
    if (percentage > 50) return "#514A96";
    if (percentage > 30) return "#DA6940";
    if (percentage > 20) return "#7AA987";
    if (percentage > 10) return "#006AFF";
    if (percentage > 5) return "#008ADA";
    return "purple";
  };

  const calculatePercentage = (groupLength: number) => {
    return (groupLength / totalNodes) * 100;
  };

  return (
    <>
      <div className="flex flex-col justify-center overflow-hidden  p-7 w-full max-w-[400px] max-h-[380px]  rounded-3xl bg-[#1a1c20]">
        <div className="flex justify-between  w-full text-white">
          <div className="self-stretch my-auto text-lg font-light">
            Node Data center
          </div>
          <div className=" relative flex gap-3 items-center self-stretch my-auto text-2xl whitespace-nowrap">
            {groups.map((group, index) => (
              <span
                key={index}
                className="  w-[25px] h-[25px] rounded-full absolute"
                style={{
                  backgroundColor: getColor(
                    calculatePercentage(group[1].length)
                  ),
                  zIndex: index,
                  left: `${index * -13}px`,
                  top: "10%",
                }}
              ></span>
            ))}

            <p className=" pl-8 self-stretch my-auto">{totalNodes}</p>
          </div>
        </div>
        <div className="flex gap-1 items-center mt-5 w-full  text-sm font-light whitespace-nowrap text-slate-500">
          <svg width="137" height="137">
            {groups.map((group, index) => (
              <circle
                key={index}
                cx="68"
                cy="68"
                r="60"
                fill="none"
                stroke={getColor(calculatePercentage(group[1].length))}
                strokeWidth="5"
                strokeDashoffset={100 - calculatePercentage(group[1].length)}
                strokeDasharray="100 100"
              />
            ))}
            <circle
              cx="68"
              cy="68"
              r="60"
              fill="none"
              stroke="none"
              strokeWidth="5"
              strokeDasharray="100 100"
            />
          </svg>

          <div className="flex flex-col max-w-[200px] text-[14px] gap-1 ml-1">
            {groups.map((group, index) => (
              <div key={index} className="flex items-center gap-1">
                <span
                  className="border-[5px] w-[7px] h-[7px] rounded-full"
                  style={{
                    borderColor: getColor(calculatePercentage(group[1].length)),
                  }}
                ></span>
                <div className="flex gap-1 line-clamp-2">
                  <p className=" mb-[7px]">{group[1][0].isp}</p>
                  <p className=" text-slate-100">
                    {group[1].length} (
                    {calculatePercentage(group[1].length).toFixed(2)}%)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BtnDiagram />
      </div>
    </>
  );
};

export default Diagram;
