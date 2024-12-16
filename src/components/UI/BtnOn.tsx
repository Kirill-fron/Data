import React from "react";
import Image from "next/image";
import { ICONS_SVG } from "@/constatnts/index";
const BtnOn = () => {
  return (
    <button className="flex items-center gap-5 font-medium text-white">
      <Image
        width={27}
        height={27}
        src={ICONS_SVG.Icons_Shutdown}
        alt="shutdown"
      />
      On
    </button>
  );
};

export default BtnOn;
