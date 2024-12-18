import Image from "next/image";
import { ICONS_SVG } from "@/constatnts/index";
import BtnOn from "./UI/BtnOn";
import { TableDataProps,  } from '@/types'

const TableData: React.FC<TableDataProps> = ({ data }) => {
  return (
    <div className="bg-[#000] my-[20px] text-[#707070]  w-full px-3 max-[630px]:grid-cols-1 grid grid-cols-2 lg:grid-cols-4  lg:gap-12">
      <div className="flex items-center gap-5">
        <p className="text-white text-[18px] font-medium">RPC</p>
        <a className="flex gap-1 text-[#DADADA] text-[18px] font-normal">
          <Image width={22} height={22} src={ICONS_SVG.Icons_Flag} alt="Flag" />
          <p>{data.rpcIp || "N/A"}</p>
        </a>
        <Image className="lg:mx-2" width={12} height={15} src={ICONS_SVG.Icons_Copy} alt="Copy" />
      </div>
      <div className="flex items-center gap-1">
        <Image width={18} height={18} src={ICONS_SVG.Icons_Human} alt="Human" />
        <p className="text-[#96bbf4] text-[18px] font-normal">{data.noder.moniker}</p>
      </div>
      <div className="flex items-center gap-1">
        <Image width={18} height={18} src={ICONS_SVG.Icons_Box} alt="Box" />
        <p className="text-[#96bbf4] text-[18px] font-normal">{data.uptime}</p>
      </div>
      <BtnOn status={data.tx_index} />
    </div>
  );
};

export default TableData;
