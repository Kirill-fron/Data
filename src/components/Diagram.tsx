import React from "react";
import { DataCenterProps } from "@/types";
import BtnDiagram from "./UI/BtnDiagram";

const Diagram: React.FC<DataCenterProps> = ({}) => {
  const dataCenterItems = [
    { color: "bg-indigo-800", text: "Texttextextexttexttexttext" },
    { color: "bg-red-500", text: "Texttextextexttexttexttext" },
    { color: "bg-sky-600", text: "Texttextextexttexttexttext" },
    { color: "bg-neutral-400", text: "Texttextextexttexttexttext" },
    { color: "bg-purple-700", text: "Texttextextexttexttexttext" },
    { color: "bg-red-900", text: "Texttextextexttexttexttext" },
  ];

  return (
    <>
      <div className="flex flex-col justify-center overflow-hidden  p-7 w-full max-w-[387px] max-h-[350px]  rounded-3xl bg-[#1a1c20]">
        <div className="flex justify-between  w-full text-white">
          <div className="self-stretch my-auto text-lg font-light">
            Node Data center
          </div>
          <div className="flex gap-3 items-center self-stretch my-auto text-2xl whitespace-nowrap">
            <span className="bg-[#F2F2F2] border  w-[20px] h-[20px] rounded-full"></span>
            <div className="self-stretch my-auto">6</div>
          </div>
        </div>
        <div className="flex gap-1 items-center mt-5 w-full  text-sm font-light whitespace-nowrap text-slate-500">
          <span className="border-[5px] border-white rounded-full w-[137px] h-[137px]"></span>
          <div className="flex flex-col gap-1 ">
            {dataCenterItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className={`${item.color} w-[7px] h-[7px] rounded-[100px]`}
                ></div>
                <p className="mb-[7px]">{item.text}</p>
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
