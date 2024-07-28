import React from "react";

const Appbar = () => {
  return (
    <div className="shadow h-14 flex justify-between items-center">
      <div className=" flex flex-col justify-center h-full ml-4">Paytm</div>
      <div className="flex  h-full">
        <div className=" flex flex-col justify-center h-full mr-4">
          Hello
        </div>
        <div className=" flex  justify-center rounded-full h-12 w-12 mt-1 mr-2 bg-slate-200">
          <div className="flex flex-col justify-center text-xl h-full">
            U
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
