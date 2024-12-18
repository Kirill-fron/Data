"use client";

import React, { useState, useEffect } from "react";
import { RpcItem } from "@/types";
import Searchmode from "./UI/Searchmode";
import BtnCosmos from "./UI/BtnCosmos";
import BtnEVM from "./UI/BtnEVM";
import Image from "next/image";
import getNetworkData from "@/api/network-data";
import { ICONS_SVG } from "@/constatnts/index";
import TableData from "./TableData";

const TableRpc: React.FC = () => {
  const [data, setData] = useState<RpcItem[]>([]);
  const [filteredData, setFilteredData] = useState<RpcItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [mode, setMode] = useState<"cosmos" | "evm">("cosmos");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof RpcItem;
    direction: "asc" | "desc";
  }>({
    key: "uptime",
    direction: "asc",
  });

  useEffect(() => {
    const fetchData = async () => {
      const networkData = await getNetworkData();
      if (networkData && networkData.rpcs) {
        setData(networkData.rpcs.cosmos);
        setFilteredData(networkData.rpcs.cosmos);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.noder.moniker.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  const toggleMode = async (newMode: "cosmos" | "evm") => {
    const networkData = await getNetworkData();
    if (!networkData) return;

    setMode(newMode);
    if (newMode === "cosmos") {
      setData(networkData.rpcs.cosmos);
      setFilteredData(networkData.rpcs.cosmos);
    } else {
      console.warn("EVM data not implemented");
      setData([]);
      setFilteredData([]);
    }
  };

  const sortData = (key: keyof RpcItem, direction: "asc" | "desc") => {
    const sorted = [...filteredData].sort((a, b) => {
      if (a[key]! > b[key]!) return direction === "asc" ? 1 : -1;
      if (a[key]! < b[key]!) return direction === "asc" ? -1 : 1;
      return 0;
    });
    setFilteredData(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <>
      <div className="  flex items-center justify-between my-10 px-3 ">
        <ul className="flex gap-1 text-[10px] md:text-[20px] ">
          <li>RPC /</li>
          <li>REST /</li>
          <li>GRPs</li>
        </ul>
        <Searchmode onSearch={setSearch} />
      </div>
      <div className="flex items-center gap-5 px-3">
        <BtnCosmos onClick={() => toggleMode("cosmos")} />
        <BtnEVM onClick={() => toggleMode("evm")} />
      </div>

      <div className="my-[20px] text-[#707070]  w-full max-[630px]:grid-cols-1 grid grid-cols-2   lg:grid-cols-4 lg:gap-12 px-3 border-b-[1px] border-[#131313]">
        <p>Status, Location</p>
        <p>Node</p>
        <div
          className="flex gap-1 cursor-pointer"
          onClick={() =>
            sortData("uptime", sortConfig.direction === "asc" ? "desc" : "asc")
          }
        >
          <p className="">Block history</p>
          <Image
            width={14}
            height={8}
            src={ICONS_SVG.Icons_Arrow}
            alt="Icons_Arrow"
          />
        </div>
        <div
          className="flex gap-1 cursor-pointer"
          onClick={() =>
            sortData(
              "tx_index",
              sortConfig.direction === "asc" ? "desc" : "asc"
            )
          }
        >
          <p className="">Indexation</p>
          <Image
            width={14}
            height={8}
            src={ICONS_SVG.Icons_Arrow}
            alt="Icons_Arrow"
          />
        </div>
      </div>
      {filteredData.map((item, index) => (
        <TableData key={index} data={item} />
      ))}
    </>
  );
};

export default TableRpc;
