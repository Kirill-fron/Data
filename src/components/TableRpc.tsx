import React from "react";
import Searchmode from "./UI/Searchmode";
import BtnCosmos from "./UI/BtnCosmos";
import BtnEVM from "./UI/BtnEVM";
import Image from "next/image";
import { ICONS_SVG } from "@/constatnts/index";
import TableData from "./TableData";

const TableRpc = () => {
  return (
    <>
      <div className="flex items-center justify-between my-10 ">
        <ul className="flex gap-1 text-[20px] ">
          <li>RPC /</li>
          <li>REST /</li>
          <li>GRPs</li>
        </ul>
        <Searchmode />
      </div>
      <div className="flex items-center gap-5">
        <BtnCosmos />
        <BtnEVM />
      </div>

      <div className="my-[20px] text-[#707070]  w-full grid md:grid-cols-4 gap-12 border-b-[1px] border-[#131313]">
        <p>Status, Location</p>
        <p>Node</p>
        <div className="flex gap-1">
          <p className="">Block history</p>
          <Image
            width={14}
            height={8}
            src={ICONS_SVG.Icons_Arrow}
            alt="Icons_Arrow"
          />
        </div>
        <div className="flex gap-1">
          <p className="">Indexation</p>
          <Image
            width={14}
            height={8}
            src={ICONS_SVG.Icons_Arrow}
            alt="Icons_Arrow"
          />
        </div>
      </div>

      <TableData />
    </>
  );
};

export default TableRpc;
