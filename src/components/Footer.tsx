"use client";

import CurrentTime from "./CurrT";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden border-t border-t-grayInput bg-blackBg pt-[50px] md:pt-[80px] lg:pt-[72px] xl:pt-[100px] pb-[5px] md:pb-[10px] xl:pb-[20px] z-20">
      <div className="container flex flex-col items-center justify-between gap-[20px] sm:items-start md:flex-row md:items-center sm:flex-wrap sm:gap-[20px]">
        <div className="flex w-full md:w-auto justify-between sm:inline-flex sm:flex-row md:flex-col sm:gap-[12px]">
          <span className="font-inter text-[17px]/[21.78px] md:text-[18px]/[21.78px] font-medium text-grayFooterText">
            {t.footer.version}
          </span>
          <span className="font-inter text-[17px]/[21.78px] md:text-[18px]/[21.78px] font-medium text-white text-opacity-85">
            {t.footer.copyright}
          </span>
        </div>
        <div className="flex w-full md:w-auto justify-between sm:inline-flex sm:flex-row md:flex-col sm:gap-[12px]">
          <span className="font-inter text-[17px]/[21.78px] md:text-[18px]/[21.78px] font-medium text-grayFooterText">
            {t.footer.localTime}
          </span>
          <span className="font-inter text-[17px]/[21.78px] md:text-[18px]/[21.78px] font-medium text-white text-opacity-85">
            <CurrentTime />
          </span>
        </div>
        <div className="flex w-full md:w-auto md:w- justify-between sm:flex-row md:flex-col sm:inline-flex sm:gap-[12px]">
          <span className="font-inter text-[17px]/[21.78px] md:text-[18px]/[21.78px] font-medium text-grayFooterText">
            {t.footer.messenger}
          </span>
          <a
            href="https://t.me/Allegory23"
            className="font-inter text-[17px]/[21.78px] md:text-[18px]/[21.78px] font-medium text-white text-opacity-85 hover:text-[#362EEC] transition-all"
          >
            Telegram
          </a>
        </div>

<div className="text-center w-full lg:w-auto">
<a
          className="font-inter mb-[20px] inline-flex justify-center text-center text-[26px] font-normal text-white sm:mb-0 lg:text-[30px] hover:text-[#362EEC] transition-all"
          href="mailto:gavrilovich.ali@gmail.com"
        >
          gavrilovich.ali@gmail.com
        </a>
</div>

      </div>
      <div className="relative pt-[8.6%]">
        <div className="absolute bottom-0 left-0 footer-fam z-10 w-full translate-y-1/2 text-center text-[14.5vw] font-bold uppercase text-white text-opacity-85 leading-[100%]">
          {t.footer.name}
        </div>
      </div>
    </footer>
  );
}
