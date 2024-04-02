"use client";

import React from "react";

const TipButtonComponent = (prop: { percent: string }) => {
  return (
    <button className="w-full h-[48px] bg-[#00494d] rounded-[5px] text-white text-[24px] hover:bg-[#9FE8DF] hover:text-[#00494d]">
      {prop.percent}
    </button>
  );
};

export default TipButtonComponent;
