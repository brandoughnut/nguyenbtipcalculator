'use client'

import React from "react";

const ResultsBoxComponent = (prop: {tipAmount:string, totalAmount:string, handleReset: () => void, btn:string}) => {
  return (
    <div className="mx-auto lg:mx-0 w-full px-[24px] lg:px-0 lg:my-auto mb-[32px]">
      <div className="w-full h-[257px] lg:w-[413px] lg:h-[417px] bg-[#00494d] rounded-[20px] px-[24px] lg:px-[40px] lg:ms-[15px]">
        <div className="grid grid-cols-2 pt-[30px] lg:pt-[52px]">
          <div className="my-auto text-[14px] lg:text-[16px]">
            <p className="text-white spaceRegular">Tip Amount</p>
            <p className="text-[#7f9c9f] spaceRegular">/ person</p>
          </div>
          <div className="spaceBold text-end text-[#26c0ab] my-auto text-[32px] lg:text-[40px]">
            {`$${prop.tipAmount}`}
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[16px] lg:mt-[36px]">
          <div className="my-auto text-[14px] lg:text-[16px]">
            <p className="text-white spaceRegular">Total</p>
            <p className="text-[#7f9c9f] spaceRegular">/ person</p>
          </div>
          <div className="spaceBold text-end text-[#26c0ab] my-auto text-[32px] lg:text-[40px]">
            {`$${prop.totalAmount}`}
          </div>
        </div>

        <button
          onClick={() => {
            {prop.handleReset()}
          }}
          className={`mt-[40px] lg:mt-[120px] w-full h-[48px] text-[#00494d] ${prop.btn} rounded-[5px] spaceBold text-[24px]`}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default ResultsBoxComponent;
