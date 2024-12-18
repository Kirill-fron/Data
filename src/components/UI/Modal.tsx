"use client";
import React, { useState } from "react";
import { ModalProps, MapDataItem } from "@/types";
import { ICONS_SVG } from "@/constatnts/index";
import Image from "next/image";
import Pagination from "./Pagination";

const Modal: React.FC<ModalProps> = ({ onClose, data, totalNodes,  }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const calculatePercentage = (groupLength: number) => {
    return ((groupLength / totalNodes) * 100).toFixed(2);
  };

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

  const groups = groupDataByAs(data);

  const getColor = (percentage: number) => {
    if (percentage > 40) return "#514A96";
    if (percentage > 30) return "#DA6940";
    if (percentage > 25) return "#8E2E2E";
    if (percentage > 20) return "#7AA987";
    if (percentage > 15) return "#D29D8A";
    if (percentage > 10) return "#006AFF";
    if (percentage > 5) return "#008ADA";
    return "purple";
  };

  return (
    <>
      <div className=" bg-[#0f0f0f] rounded-[20px] w-full max-w-[400px]  lg:max-w-[1058px] h-auto p-[30px]  ">
        <div className="flex justify-between items-center">
          <div className="flex  items-center gap-16">
            <p className="text-[15px] lg:text-[25px] font-medium">Node Data center</p>
            <div  className="relative flex gap-3 items-center my-auto">
            {groups.map((group, index) => (
              <span
                key={index}
                className="w-[20px] h-[20px] rounded-full absolute"
                style={{
                  backgroundColor: getColor(group[1].length / totalNodes * 100),
                  zIndex: index,
                  left: `${index * -7}px`,
                  top: "20%",
                }}
              ></span>
            ))}
            <p className=" pl-8 text-[25px] font-medium leading-[37px]">
              {totalNodes}
            </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[14px] text-[#707070] hover:text-white"
          >
            X
          </button>
        </div>

        <div className="max-w-[998px] grid grid-cols-1 lg:grid-cols-3 gap-3 mt-[30px]">
          {paginatedData.map((node, index) => (
            <div key={index} className="flex items-center  gap-3">
              <p className="text-[#798395] font-medium">
                {startIndex + index + 1}
              </p>
              <Image
                className=" bg-[#505A5F] rounded-full p-1"
                width={18}
                height={18}
                src={ICONS_SVG.Icons_Human}
                alt="Human"
              />
              <p className="text-white font-medium line-clamp-1">{node.isp}</p>
              <span className="text-[#798395]  font-medium px-2 rounded-xl max-w-[66px]  bg-[#26292a]">
                {calculatePercentage(1)}%
              </span>
            </div>
          ))}
        </div>
        <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default Modal;
