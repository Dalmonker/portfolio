'use client';
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Svg } from "@/components/Svg";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/medical-dashboard/dashboard.webp";
import Dashboard2Image from "../../../../public/img/work/medical-dashboard/dashboard2.webp";
import Dashboard3Image from "../../../../public/img/work/medical-dashboard/dashboard3.webp";
import PreviewImage from "../../../../public/img/work/project-roadmap/preview.webp";
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
            { title: "Year:", value: "2025" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Medical / Healthcare" },
          ]}
          arrow={true}
        />
        <section>
            <Image
              className="container flex flex-col items-center"
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
            <div className="mb-[60px] md:mb-[80px] xl:mb-[120px] flex flex-col">
              <Image
                className="mb-[30px]"
                src={Dashboard2Image}
                quality={95}
                sizes="100vw"
                alt=""
              />
              <span className="font-inter font-medium text-[17px] md:text-[18px] text-[#404040] lg:max-w-[596px]">
                {t.workPages.medical.descriptionCenter}
              </span>
            </div>

            <div>
              <Image
                className="mb-[30px]"
                src={Dashboard3Image}
                quality={95}
                sizes="100vw"
                alt=""
              />
              <div className="lg:flex">
                <p className="font-inter xl:mr-[80px] leading-[100%] text-[24px] md:text-[30px] md:mr-[20px] xl:text-[40px] lg:mb-[0px] miniSm:mb-[20px] font-medium text-[#404040]">
                  {t.workPages.medical.titleTwo}
                </p>
                <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] max-w-[495px]">
                  {t.workPages.medical.descriptionTwo}
                </p>
              </div>
            </div>
          </div>
        </section>

        <NextPageSection
          projectKey="roadMap"
          bgColor="#21415C"
          href="https://kwork.ru/portfolio/15773530"
          image={PreviewImage}
        />
      </main>
      <Footer />
    </>
  );
}
