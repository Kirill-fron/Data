import React, { useState, useEffect } from "react";
import getMapData from "@/api/map-data";
import Modal from './Modal'
const BtnDiagram = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<unknown[]>([]);
  const [totalNodes, setTotalNodes] = useState(0);


  useEffect(() => {
    getMapData().then((res) => {
      setData(res);
      setTotalNodes(res.length);
    });
  }, []);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="flex gap-2.5 justify-center items-center self-center px-10 py-1 mt-5 text-sm bg-slate-400 bg-opacity-10 rounded-[100px] text-slate-400 hover:transition-all hover:bg-slate-700"
        aria-label="View all data centers"
      >
        <p className="gap-1.5 self-stretch my-auto">View all centers</p>
      </button>
       
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        >
           <Modal
            onClose={handleCloseModal}
            data={data}
            totalNodes={totalNodes}
          />
        </div>
      )}
    </>
  );
};

export default BtnDiagram;
