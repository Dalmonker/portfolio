'use client';
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Svg } from "@/components/Svg";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/mckduck/demonstration1.webp";
import krya1Image from "../../../../public/img/work/mckduck/krya1.webp";
import krya2Image from "../../../../public/img/work/mckduck/krya2.webp";
import kryaIpadImage from "../../../../public/img/work/mckduck/krya-ipad.webp";
import PreviewImage from "../../../../public/img/work/vinyl/preview.webp";
import { NextPageSection } from "@/components/sections/NextPageSection";
import {useLanguage} from "@/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>Medical</>}
          subTitle={
            <span className="text-[#362EEC] xl:text-[125px]">Dashboard</span>
          }
          table={[
            { title: "Year:", value: "2024" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Medical / Healthcare" },
          ]}
          arrow={true}
        />
        <section>
            <Image
              className="animate__animated opacity-0 container flex flex-col items-center"
              data-animation="animate__fadeInUp"
              sizes="100vw"
              src={MainBgImage}
              alt=""
              quality={95}
              priority

            />
        </section>

        <section className=" bg-[#ffffff] pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px] xl:pt-[120px] xl:pb-[120px]">
          <div className="container lg:flex">
            <p className="font-inter xl:mr-[80px] leading-[100%] text-[24px] md:text-[30px] md:mr-[20px] xl:text-[40px]  miniSm:mb-[20px] font-medium text-[#404040]">
              {t.workPages.medical.titleOne}
            </p>
            <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] max-w-[495px]">
              {t.workPages.medical.descriptionOne}
            </p>
          </div>
        </section>

        <section className=" bg-[#F8F8F8] py-[60px] md:py-[80px] xl:py-[120px]">
          <div className="container flex flex-col items-center">
            <div className="mb-[60px] md:mb-[80px] xl:mb-[120px]">
              <div className="flex lg:gap-[20px] flex-col lg:flex-row items-center">
                <Image
                    className="mb-[30px] w-full"
                    src={krya1Image}
                    quality={95}
                    sizes="100vw"
                    alt=""
                />
                <Image
                    className="mb-[30px] w-full"
                    src={krya2Image}
                    quality={95}
                    sizes="100vw"
                    alt=""
                />
              </div>
              <div className="container flex flex-col mckduck lg:justify-between lg:flex-row">
                <p className="font-inter xl:mr-[80px] leading-[100%] text-[24px] md:text-[30px] md:mr-[20px] xl:text-[40px] miniSm:mb-[20px] font-medium text-[#404040] lg:max-w-[596px] text-start lg:w-[50%] mb-[20px] lg:mb-[0px]">
                  {t.workPages.medical.titleOne}
                </p>
                <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] lg:max-w-[495px] lg:w-[50%]">
                  {t.workPages.medical.descriptionOne}
                </p>
              </div>
            </div>
            <div className="mb-[60px] md:mb-[80px] xl:mb-[120px]">
              <Image
                  className="mb-[30px]"
                  src={kryaIpadImage}
                  quality={95}
                  sizes="100vw"
                  alt=""
              />
              <span className="font-inter font-medium text-[17px] md:text-[18px] text-[#404040]">
                {t.workPages.medical.descriptionCenter}
              </span>
            </div>
          </div>
        </section>

        <NextPageSection
          projectKey="vinyl"
          bgColor="#EFE9D8"
          href="/work/vinyl"
          image={PreviewImage}
        />
      </main>
      <Footer />
    </>
  );
}
