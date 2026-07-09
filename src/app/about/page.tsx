"use client";

import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// import Link from "next/link";
import { Svg } from "@/components/Svg";
import { Header } from "@/components/Header";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <Header isWhite />
      <main className="flex flex-col">
        <section className="bg-blackBg pb-[38px] pt-[107px] sm:pb-[38px] md:pb-[58px] lg:pb-[63px] xl:pb-[83px]">
          <div className="container relative">
            <h1 className="text-[44px]/[48.4px] sm:text-[52px]/[62px] md:text-[90px]/[110px] lg:pt-[8px] xl:pt-[35px] lg:text-[90px]/[109px] xl:text-[150px]/[165px] font-bold uppercase text-white mb-[10px] sm:mb-[16px] md:mb-[6px] relative md:pt-[8px]">
              <Svg
                className="absolute right-0 text-white +rotate-90 hidden sm:flex mt-[8px] md:mt-[18px] xl:mt-[24px]"
                iconId="icon-arrow-about"
                size={30}
              />

              {/* <svg className="absolute right-0 sm:flex mt-[8px] md:mt-[18px] xl:mt-[24px]" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_430_1975)">
              <path d="M8.24938 25.1669L29.999 3.41723L26.5819 0.00012207L4.83227 21.7498V3.41723L-0.000980139 3.41723L-0.000980139 30.0001L26.5819 30.0001L26.5819 25.1669H8.24938Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_430_1975">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              </defs>
              </svg> */}


              {t.about.title}
            </h1>
            <div className="flex flex-col xl:flex-row xl:items-center lg:mt-[9px] xl:mt-[-6px]">
              <p className="font-medium font-inter text-[17px]/[20.57px] md:text-[18px]/[21.78px] text-white xl:mr-[60px] max-w-[598px] mb-[9px] md:max-w-full">
                {t.about.description}
              </p>
              <div className=" text-[44px]/[48.4px] sm:text-[52px]/[57.2px] md:text-[90px]/[88px] xl:text-[150px]/[165px] font-bold uppercase text-[#362EEC] mb-[10px] sm:mb-[16px] text-right mt-[8px] lg:mt-0 sm:pr-[8px] sm:mr-[2px]">
                {t.about.thrive}
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[60px] sm:pt-[61px] lg:pt-[120px] md:pt-[82px] lg:pt-[81px] xl:pt-[121px]">
          <div className="container flex flex-col gap-[32px] sm:gap-[40px] lg:flex-row lg:gap-[20px]">
            <div className="flex flex-col lg:max-w-[450px] xl:max-w-[598px]">
              <h2 className="font-inter text-[17px]/[20.57px] mb-[20px] md:mb-[28px] font-medium text-grayFooterText">
                {t.about.myServices}
              </h2>
              <ul className="border-t border-t-grayBorder">
                <li className="flex flex-col border-b border-b-grayBorder lg:pt-[30px] pt-[33px] pb-[28px] sm:pb-[26px] md:pt-[41px] lg:pt-[42px] xl:pt-[62px] md:pb-[38px]">
                  <div className="text-[24px]/[31.75px] md:text-[40px]/[52.92px] font-medium uppercase text-blackText">
                    {t.about.services.design.title}
                  </div>
                  <p className="font-inter text-[17px]/[20.57px] md:text-[18px]/[21.78px] font-medium text-blackText mt-[11px] md:mt-[21px]">
                    {t.about.services.design.description}
                  </p>
                </li>
                <li className="flex flex-col border-b border-b-grayBorder py-10 pt-[26px] pb-[29px] md:pt-[41px] lg:pt-[31px] xl:pt-[40px] md:pb-[39px]">
                  <div className="text-[24px]/[31.75px] md:text-[40px]/[52.92px] font-medium uppercase text-blackText">
                    {t.about.services.development.title}
                  </div>
                  <p className="font-inter text-[17px]/[20.57px] md:text-[18px]/[21.78px] font-medium text-blackText mt-[11px] md:mt-[20px]">
                   {t.about.services.development.description}
                  </p>
                </li>
                <li className="flex flex-col pt-[25px] lg:border-b lg:border-b-grayBorder lg:py-10 md:pt-[41px] lg:pt-[31px] xl:pt-[42px] md:pb-[8px]">
                  <div className="text-[24px]/[31.75px] md:text-[40px]/[52.92px] font-medium uppercase text-blackText">
                    {t.about.services.fullPackage.title}
                  </div>
                  <p className="font-inter text-[17px]/[20.57px] md:text-[18px]/[21.78px] font-medium text-blackText mt-[11px] md:mt-[20px]">
                    {t.about.services.fullPackage.description}
                  </p>
                </li>
              </ul>
            </div>

            <picture className="w-full">
              <source className="w-full" srcSet="/img/portrait/photoAbout-1920.webp" media="(min-width: 1200px)"/>
              <source className="w-full" srcSet="/img/portrait/photoAbout-960.webp" media="(min-width: 960px)"/>
              <source className="w-full" srcSet="/img/portrait/photoAbout-768.webp" media="(min-width: 768px)"/>
              <source className="w-full" srcSet="/img/portrait/photoAbout-480.webp" media="(min-width: 480px)" />
              <img className="w-full" src="/img/portrait/photoAbout-360.webp" alt="" />
            </picture>


            {/* <Image
              className="h-[500px] w-full lg:h-[740px] lg:w-1/2 lg:object-cover"
              src="/img/portrait/photo_about.webp"
              alt=""
              objectFit="cover"
              quality={95}
              width={598}
              height={740}
            /> */}

          </div>
        </section>
        <section className="container py-[60px] sm:pb-[27px] md:py-[80px] lg:py-[120px] pb-[30px] md:pt-[82px] md:pb-[46px] lg:pt-[80px] xl:pt-[119px] lg:pb-[39px] xl:pb-[96px]">
          <div className="mb-[32px]">
              <h2 className="mb-[22px] md:mb-[28px] sm:mb-[18px] text-[17px]/[20.57px] md:text-[18px]/[21.78px] font-inter font-medium text-grayFooterText">
                Stages of my work
              </h2>
              <hr className="border-t-[#E5E0DC]" />
          </div>
          <ul className="grid grid-cols-2 gap-x-[10px] md:grid-cols-4 xl:grid-cols-[186px_1fr_186px_1fr_186px_1fr_186px] sm:gap-x-[20px] md:pt-[28px]">
            <li className="flex flex-col items-center text-center mb-[32px] md:mb-[97px] lg:mb-[67px] xl:mb-[84px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue font-medium text-white text-[18px]/[21.78px] mb-[10px] md:mb-[16px]">
                01
              </div>
              <div className="font-medium uppercase text-[#404040] text-[24px]/[31.75px] lg:text-[30px]/[39.69px] mb-[8px] lg:mb-[15px]">
                interview
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px] mb-[8px] mb-[8px]">
                brief
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px]">
                statement of&nbsp;work
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC] flex-1" />
            </li>
            <li className="flex flex-col items-center text-center mb-[32px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue font-medium text-white text-[18px]/[21.78px] mb-[10px] md:mb-[16px]">
                02
              </div>
              <div className="font-medium uppercase text-[#404040] text-[24px]/[31.75px] lg:text-[30px]/[39.69px] mb-[8px] lg:mb-[15px]">
                research
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px] mb-[8px]">
                JTBD
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px]">
                competitor analysis
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]  flex-1" />
            </li>
            <li className="flex flex-col items-center text-center mb-[32px] md:mb-[97px] lg:mb-[67px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue font-medium text-white text-[18px]/[21.78px] mb-[10px] md:mb-[16px]">
                03
              </div>
              <div className="font-medium uppercase text-[#404040] text-[24px]/[31.75px] lg:text-[30px]/[39.69px] mb-[8px] lg:mb-[15px]">
                Analytics
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px] mb-[8px]">
                CJM
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px]">
                target audience
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]  flex-1  " />
            </li>
            <li className="flex flex-col items-center text-center mb-[32px] md:mb-[40px] lg:mb-[67px] xl:mb-[84px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue font-medium text-white text-[18px]/[21.78px] mb-[10px] md:mb-[16px]">
                04
              </div>
              <div className="font-medium uppercase text-[#404040] text-[24px]/[31.75px] lg:text-[30px]/[39.69px] mb-[8px] lg:mb-[15px]">
                User Flow
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px] mb-[8px]">
                task flow
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px]">
                sketching
              </div>
            </li>

            <li className="flex flex-col items-center text-center mb-[32px] md:mb-[40px] xl:mb-[40px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue font-medium text-white text-[18px]/[21.78px] mb-[10px] md:mb-[16px]">
                05
              </div>
              <div className="font-medium uppercase text-[#404040] text-[24px]/[31.75px] lg:text-[30px]/[39.69px] mb-[8px] lg:mb-[15px]">
                UI&nbsp;design
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px]">
                layout drawing and&nbsp;UI kit
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]  flex-1" />
            </li>
            <li className="flex flex-col items-center text-center mb-[32px] md:mb-[40px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue font-medium text-white text-[18px]/[21.78px] mb-[10px] md:mb-[16px]">
                06
              </div>
              <div className="font-medium uppercase text-[#404040] text-[24px]/[31.75px] lg:text-[30px]/[39.69px] mb-[8px] lg:mb-[15px]">
                Prototype
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px]">
                сreating a&nbsp;clickable prototype
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC]  flex-1  " />
            </li>
            <li className="flex flex-col items-center text-center mb-[32px] md:mb-[40px]">
              <div className="font-inter flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue font-medium text-white text-[18px]/[21.78px] mb-[10px] md:mb-[16px]">
                07
              </div>
              <div className="font-medium uppercase text-[#404040] text-[24px]/[31.75px] lg:text-[30px]/[39.69px] mb-[8px] lg:mb-[15px]">
                Adaptive
              </div>
              <div className="font-inter font-medium text-[#404040] text-[17px]/[20.57px] md:text-[18px]/[21.78px]">
                design adaptation for all resolutions
              </div>
            </li>
            <li className="hidden xl:flex">
              <hr className="mt-[143px] border-t-[#E5E0DC] flex-1" />
            </li>
            <li className="flex flex-col items-center text-center mb-[32px] md:mb-[40px] xl:mb-[40px]">
              <div className="font-inter text-[18px]/[21.78px] flex h-[110px] w-[110px] items-center justify-center rounded-full bg-blue font-medium text-white mb-[10px] md:mb-[16px]">
                08
              </div>
              <div className="text-[24px]/[31.75px] lg:text-[30px]/[39.69px] font-medium uppercase text-[#404040] mb-[8px] lg:mb-[15px]">
                layout
              </div>
              <div className="font-inter text-[17px]/[20.57px] md:text-[18px]/[21.78px] font-medium text-[#404040]">
                site layout on&nbsp;tilda builder
              </div>
            </li>
          </ul>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
