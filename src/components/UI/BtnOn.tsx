import React from "react";
import Image from "next/image";
import { BtnOnProps } from "@/types";
import { ICONS_SVG } from "@/constatnts/index";
const BtnOn: React.FC<BtnOnProps> = ({status}) => {
  const isOn = status === "on";
  return (
    <button
      className={`flex items-center gap-5 font-medium ${
        isOn ? "text-green-500" : "text-red-500"
      }`}
    >
      <Image
        width={27}
        height={27}
        src={isOn ? ICONS_SVG.Icons_Shutdown : ICONS_SVG.Icons_ShutdownOff}
        alt="shutdown"
      />
      {isOn ? "On" : "Off"}
    </button>
  );
};

export default BtnOn;
