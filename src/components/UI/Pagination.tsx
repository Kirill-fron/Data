import React from "react";
import Image from "next/image";
import { ICONS_SVG } from "@/constatnts/index";
import { PaginationProps } from "@/types";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const pageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <>
      <div className="flex justify-center z-10  py-2 mt-8 w-full min-h-[54px] ">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] max-w-[462px]">
          <div className="flex items-center w-full  ">
            <button
              className="flex justify-center items-center px-2.5 pt-1.5 pb-1.5 h-full rounded-md min-w-[41px] w-[41px]"
              aria-label="First page"
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
            >
              <Image
                width={18}
                height={18}
                src={ICONS_SVG.Icons_LeftArrow}
                alt="arrow"
              />
            </button>
            <button
              className="flex justify-center items-center pt-1.5 pr-2.5 pb-1.5 pl-3 h-full min-w-[41px] w-[41px]"
              aria-label="Previous page"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <Image
                width={18}
                height={18}
                src={ICONS_SVG.Icons_LeftArrow_}
                alt="arrow_"
              />
            </button>
            {pageNumbers().map((page) => (
              <button
                key={page}
                className={`self-stretch px-3 py-2 h-full text-base font-medium whitespace-nowrap min-w-[41px] rounded-xl ${
                  currentPage === page
                    ? "bg-stone-950 text-white"
                    : "text-neutral-50 hover:bg-stone-950 hover:transition-all"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="flex justify-center items-center pt-1.5 pr-2.5 pb-1.5 pl-3 h-full min-w-[41px] w-[41px]"
              aria-label="Next page"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <Image
                width={18}
                height={18}
                src={ICONS_SVG.Icons_LeftArrow_}
                alt="Next page"
                className="rotate-180"
              />
            </button>
            <button
              className="flex justify-center items-center px-2.5 pt-1.5 pb-1.5 h-full rounded-none min-w-[41px] w-[41px]"
              aria-label="Last page"
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
            >
              <Image
                width={18}
                height={18}
                src={ICONS_SVG.Icons_LeftArrow}
                alt="Last page"
                className="rotate-180"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
