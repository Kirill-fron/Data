import Image from "next/image";
import { ICONS_SVG } from "@/constatnts/index";
import BtnOn from "./UI/BtnOn";
const TableData = () => {
  return (
    <div className="bg-[#000] my-[20px] text-[#707070]  w-full grid md:grid-cols-4 gap-12">
      <div className="flex items-center gap-5">
        <p className="text-white text-[18px] font-medium">RPC</p>
        <a className="flex gap-1 text-[#DADADA] text-[18px] font-normal">
          <Image width={22} height={22} src={ICONS_SVG.Icons_Flag} alt="Flag" />
          http://127.0.0.1:32657
        </a>
        <Image width={12} height={15} src={ICONS_SVG.Icons_Copy} alt="Copy" />
      </div>
      <div className="flex items-center gap-1">
        <Image
          width={18}
          height={18}
          src={ICONS_SVG.Icons_Human}
          alt="Human"
        />
        <p className="text-[#96bbf4] text-[18px] font-normal">STAKEME</p>
      </div>
      <div className="flex items-center gap-1">
        <Image
          width={18}
          height={18}
          src={ICONS_SVG.Icons_Box}
          alt="Box"
        />
        <p className="text-[#96bbf4] text-[18px] font-normal">17 955 400</p>
      </div>
      <BtnOn />
    </div>
  );
};

export default TableData;
