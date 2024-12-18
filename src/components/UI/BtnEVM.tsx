import React from "react";
import { BtnEVMProps } from '@/types'

const BtnEVM: React.FC<BtnEVMProps> = ({ onClick }) => {
  return (
    <button className="w-full max-w-[130px] h-[38px] rounded-xl bg-[#0B0B0B] font-medium hover:bg-[#f2f2f2] hover:text-[#000] hover:transition-all "
    onClick={onClick}
    >
      EVM
    </button>
  );
};

export default BtnEVM;
