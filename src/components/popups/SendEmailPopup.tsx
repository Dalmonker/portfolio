"use client";

import { useEffect } from "react";

export default function SendEmailPopup({ closeAction }: { closeAction: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  return (
      <>
        <div
            onClick={closeAction}
            className="bg-[#26292E] opacity-90 fixed top-0 left-0 z-[1000] w-full h-full"
        ></div>
        <div className=" bg-[#2E4EEC] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001]">
          <button
              className="absolute right-[20px] top-[20px] flex w-[30px] h-[30px] items-center justify-center cursor-pofont-inter text-[#26292E] hover:text-black transition-all"
              onClick={closeAction}
          >
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M5 25L25 5.41856"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
              />
              <path
                  d="M5 5L25 24.5814"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className=" uppercase m-[30px] mt-[40px] md:m-[50px] md:mt-[80px] font-bold text-[60px] md:text-[120px]">
            <div className="text-white">Thank</div>
            <div className="text-[#26292E]">You</div>
          </div>
          <hr className=" m-0 flex w-full h-[1px] bg-[#26292E]" />
          <div className="text-white font-inter font-medium text-[20px] md:text-[30px] m-[30px] mb-[40px]  md:m-[50px] md:mb-[80px] flex flex-col">
            <div className=" flex-shrink-0 text-nowrap">
              Your message has been sent.
            </div>
            <div className=" flex-shrink-0 text-nowrap">
              I will get back to you soon!
            </div>
          </div>
        </div>
      </>
  );
}