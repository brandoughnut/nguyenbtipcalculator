"use client";

import React, { use, useEffect, useState } from "react";
import TipButtonComponent from "./TipButtonComponent";
import dollar from "@/assets/icon-dollar.svg";
import person from "@/assets/icon-person.svg";
import Image from "next/image";

const MainPageComponent = () => {

  const [billInput, setBillInput] = useState<string>('');
  const [tipInput, setTipInput] = useState<string>('5');
  const [peopleInput, setPeopleInput] = useState<string>('');
  const [tipAmount, setTipAmount] = useState<string>('');
  const [totalAmount, setTotalAmount] = useState<string>('');

  useEffect(() => {
    document.body.style.backgroundColor = "#c5e4e7";
    console.log(billInput);
    console.log(tipInput);
    console.log(peopleInput);
    tipPerPerson();
    totalPerPerson();
  }, [peopleInput]);

  const tipPerPerson = () => {
    let tips = parseInt(billInput) * (parseInt(tipInput)/100) / parseInt(peopleInput);
    setTipAmount(((tips * 100)/100).toString());
    console.log((tips * 100)/100);
  }

  const totalPerPerson = () => {
    let total = parseInt(billInput) / parseInt(peopleInput);
    setTotalAmount(((total * 100)/100).toString());
    console.log((total * 100)/100);
  }

  return (
    <div>
      <div className="min-h-screen grid align-center">
        <div className="text-center text-[24px] text-[#00494d] spaceBold tracking-[8px] my-auto">
          <p>SPLI</p>
          <p>TTER</p>
        </div>

        <div className="bg-white h-auto w-full lg:w-[920px] lg:h-[481px] rounded-[20px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="spaceBold px-[32px] lg:ps-[48px] mb-[32px] lg:my-auto">
              <p className="text-[#5e7a7d]">Bill</p>
              <div className="relative">
                <span className="absolute top-4 left-[14px]">
                  <Image src={dollar} alt="dollar symbol icon" />
                </span>
                <input
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                      setBillInput(e.target.value)
                  }}
                  value={billInput}
                  type="number"
                  placeholder="0"
                  className="w-full lg:w-[379px] h-[48px] bg-[#f4fafa] rounded-[5px] text-end text-[#00494d] placeholder-[#7f9c9f] text-[24px] focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab] ps-[37px] pe-[14px]"
                />
              </div>

              <p className="text-[#5e7a7d]">Select Tip %</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[14.5px]">
                <TipButtonComponent percent="5%" />
                <TipButtonComponent percent="10%" />
                <TipButtonComponent percent="15%" />
                <TipButtonComponent percent="25%" />
                <TipButtonComponent percent="50%" />
                <input
                  onChange={(e) => {
                    if(/^\d*$/.test(e.target.value) && !e.target.value.includes('.')){
                      setTipInput(e.target.value)
                      console.log(e.target.value)
                    }
                  }
                  }
                  value={tipInput}
                  type="text"
                  className="w-full h-[48px] bg-[#f4fafa] rounded-[5px] placeholder-[#5e7a7d] text-[#00494d] text-end text-[24px] focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab] px-[14px]"
                  placeholder="Custom"
                />
              </div>
              <p className="text-[#5e7a7d]">Number of People</p>
              <div className="relative">
                <span className="absolute top-4 left-[14px]">
                  <Image src={person} alt="person icon"/>
                </span>
                <input
                  onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                    setPeopleInput(e.target.value)
                    console.log(e.target.value)
                  }
                }
                  value={peopleInput}
                  type="number"
                  placeholder="0"
                  className="w-full lg:w-[379px] h-[48px] bg-[#f4fafa] rounded-[5px] text-end text-[#00494d] placeholder-[#7f9c9f] text-[24px] focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab] ps-[37px] pe-[14px]"
                />
              </div>
            </div>
            <div className="mx-auto lg:mx-0 w-full px-[24px] lg:px-0 lg:my-auto mb-[32px]">
              <div className="w-full lg:w-[413px] h-[417px] bg-[#00494d] rounded-[20px] px-[40px] lg:ms-[15px]">
                <div className="grid grid-cols-2">
                  <div className="my-auto">
                    <p className="text-white spaceRegular">Tip Amount</p>
                    <p className="text-[#7f9c9f] spaceRegular">/ person</p>
                  </div>
                  <div className="spaceBold text-end text-[#26c0ab] my-auto text-[40px]">
                    {`$0.00`}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="my-auto">
                    <p className="text-white spaceRegular">Total</p>
                    <p className="text-[#7f9c9f] spaceRegular">/ person</p>
                  </div>
                  <div className="spaceBold text-end text-[#26c0ab] my-auto text-[40px]">
                    {`$0.00`}
                  </div>
                </div>

                <button onClick={()=> {
                  setBillInput('');
                  setTipInput('');
                  setPeopleInput('');
                }} className="w-full h-[48px] text-[#00494d] bg-[#26c0ab] hover:bg-[#9FE8DF] rounded-[5px] spaceBold text-[24px]">
                  RESET
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
