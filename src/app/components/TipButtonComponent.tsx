"use client";

import React from "react";


const TipButtonComponent = (prop: { percent: string, tip: (input:string) => void, savedTip:string, tipInput: (input:string) => void} ) => {

  return (
    <button onClick={() => {
      prop.tip(prop.percent)
      prop.tipInput('')
      }} className={`w-full h-[48px] rounded-[5px] text-[24px] hover:bg-[#9FE8DF] hover:text-[#00494d] ${prop.savedTip === prop.percent ? 'text-[#00494d] bg-[#26c0ab]' : 'bg-[#00494d] text-white'}`}>
      {`${prop.percent}%`}
    </button>
  );
};

export default TipButtonComponent;
