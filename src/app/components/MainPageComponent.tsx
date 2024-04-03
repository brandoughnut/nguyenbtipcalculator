"use client";

import React, { use, useEffect, useState } from "react";
import TipButtonComponent from "./TipButtonComponent";
import dollar from "@/assets/icon-dollar.svg";
import person from "@/assets/icon-person.svg";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import ResultsBoxComponent from "./ResultsBoxComponent";

const MainPageComponent = () => {

  const [billInput, setBillInput] = useState<string>('');
  const [tipInput, setTipInput] = useState<string>('');
  const [savedTipInput, setSavedTipInput] = useState<string>('0');
  const [peopleInput, setPeopleInput] = useState<string>('');
  const [tipAmount, setTipAmount] = useState<string>('NaN');
  const [totalAmount, setTotalAmount] = useState<string>('NaN');
  const [btn, setBtn] = useState<string>('bg-[#29696D] cursor-default');
  const [peopleToggle, setPeopleToggle] = useState<string>('focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab]');
  const [peopleText, setPeopleText] = useState<string>('');

  useEffect(() => {

    document.body.style.backgroundColor = "#c5e4e7";

    if(billInput !== '' && (peopleInput === '' || peopleInput === '0')){
      setPeopleToggle('outline-none ring-[2px] ring-[#FF835B]');
      setPeopleText('Can\'t be zero');
    }else{
      setPeopleToggle('focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab]');
      setPeopleText('');
    }

    let tips = Number(billInput) * (Number(savedTipInput)/100) / Number(peopleInput);
    let bill = Number(billInput) / Number(peopleInput);
    let total = bill + tips;
    setTipAmount(tips.toFixed(2));
    setTotalAmount(total.toFixed(2));
    
    if(total.toFixed(2) === 'NaN' || total.toFixed(2) === '' || total.toFixed(2) === 'Infinity'){
      setTotalAmount('0.00');
    }
    if(tips.toFixed(2) === 'NaN' || tips.toFixed(2) === '' || tips.toFixed(2) === 'Infinity'){
      setTipAmount('0.00');
    }

    if(billInput !== '' || tipInput !== '' || peopleInput !== ''){
      setBtn('bg-[#26c0ab] hover:bg-[#9FE8DF]');
    }else{
      setBtn('bg-[#29696D] cursor-default');
    }

  }, [billInput, savedTipInput, peopleInput]);

  const handleReset = () => {
    if(billInput !== '' || tipInput !== '' || peopleInput !== ''){
      setBillInput('');
      setTipInput('');
      setSavedTipInput('0');
      setPeopleInput('');
    }
  }

  return (
    <div>
      <div className="min-h-screen grid align-center">
        <div className="mt-[50px] lg:mt-auto mb-[41px] lg:mb-[88px] mx-auto">
          
          <Image src={logo} alt="splitter logo"/>
        </div>

        <div className="bg-white h-auto w-full lg:w-[920px] lg:h-[481px] rounded-t-[20px] lg:rounded-[20px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            <div className="spaceBold px-[32px] lg:ps-[48px] mb-[32px]">
              <p className="text-[#5e7a7d] mt-[42px] mb-[12px]">Bill</p>
              <div className="relative">
                <span className="absolute top-4 left-[14px]">
                  <Image src={dollar} alt="dollar symbol icon" />
                </span>
                <input
                  onChange={(e) => {
                    if(Number(e.target.value) >= 0 || e.target.value === ''){
                      setBillInput(e.target.value)
                    }
                  }}
                  value={billInput}
                  type="number"
                  placeholder="0"
                  className="w-full lg:w-[379px] h-[48px] bg-[#f4fafa] rounded-[5px] text-end text-[#00494d] placeholder-[#7f9c9f] text-[24px] focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab] ps-[37px] pe-[14px]"
                />
              </div>

              <p className="text-[#5e7a7d] mt-[36px] mb-[18px]">Select Tip %</p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-[16px] lg:gap-[14.5px]">
                <TipButtonComponent percent="5" tip={setSavedTipInput} savedTip={savedTipInput} tipInput={setTipInput}/>
                <TipButtonComponent percent="10" tip={setSavedTipInput} savedTip={savedTipInput} tipInput={setTipInput}/>
                <TipButtonComponent percent="15" tip={setSavedTipInput} savedTip={savedTipInput} tipInput={setTipInput}/>
                <TipButtonComponent percent="25" tip={setSavedTipInput} savedTip={savedTipInput} tipInput={setTipInput}/>
                <TipButtonComponent percent="50" tip={setSavedTipInput} savedTip={savedTipInput} tipInput={setTipInput}/>
                <input
                  onChange={(e) => {
                    if(Number(e.target.value) >= 0 || e.target.value === ''){
                      setTipInput(e.target.value)
                      if(e.target.value === ''){
                        setSavedTipInput('0');
                      }else{
                        setSavedTipInput(e.target.value);
                      }
                    }
                  }
                  }
                  value={tipInput}
                  type="number"
                  className="w-full h-[48px] bg-[#f4fafa] rounded-[5px] placeholder-[#5e7a7d] text-[#00494d] text-end text-[24px] focus:outline-none focus:ring-[2px] focus:ring-[#26c0ab] px-[14px]"
                  placeholder="Custom"
                />
              </div>
              <div className="flex justify-between">
                <p className="text-[#5e7a7d] mt-[36px] mb-[12px]">Number of People</p>
                <p className="text-[#FF835B] mt-[36px] mb-[12px]">{peopleText}</p>
              </div>
              <div className="relative">
                <span className="absolute top-4 left-[14px]">
                  <Image src={person} alt="person icon"/>
                </span>
                <input
                  onChange={(e) => {
                    if(/^\d*$/.test(e.target.value) && !e.target.value.includes('.')){
                    setPeopleInput(e.target.value)
                    }
                  }
                }
                  value={peopleInput}
                  type="text"
                  placeholder="0"
                  className={`w-full lg:w-[379px] h-[48px] bg-[#f4fafa] rounded-[5px] text-end text-[#00494d] placeholder-[#7f9c9f] text-[24px] ${peopleToggle} ps-[37px] pe-[14px]`}
                />
              </div>
            </div>
            <ResultsBoxComponent tipAmount={tipAmount} totalAmount={totalAmount} handleReset={handleReset} btn={btn}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageComponent;
