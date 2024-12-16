import React from "react";
import { ICONS_SVG } from "@/constatnts/index";
const Searchmode = () => {
  return (
    <>
      <form>
        <input
          className="flex text-center h-[40px]  py-1 px-24 text-[#707070]  font-medium rounded-2xl border border-solid bg-[#000]  border-neutral-900 "
          placeholder="Search mode"
          type="text"
          style={{
            backgroundImage: `url(${ICONS_SVG.Icons_Glass})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: " right 10px center",
          }}
        />
      </form>
    </>
  );
};

export default Searchmode;
