'use client';
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/mckduck/demonstration1.webp";
import kryaCenterImage from "../../../../public/img/work/mckduck/krya-center.webp";
import kryaCenterImage2 from "../../../../public/img/work/mckduck/krya-center2.webp";
import krya1Image from "../../../../public/img/work/mckduck/krya1.webp";
import krya2Image from "../../../../public/img/work/mckduck/krya2.webp";
import phone1Top from "../../../../public/img/work/mckduck/phone1.png";
import phone2Top from "../../../../public/img/work/mckduck/phone2.png";
import phone1Center from "../../../../public/img/work/mckduck/phone3.png";
import phone2Center from "../../../../public/img/work/mckduck/phone4.png";
import phone3Center from "../../../../public/img/work/mckduck/phone5.png";
import phone4Center from "../../../../public/img/work/mckduck/phone6.png";
import phone5Center from "../../../../public/img/work/mckduck/phone7.webp";
import phone1Bottom from "../../../../public/img/work/mckduck/phone8.webp";
import phone2Bottom from "../../../../public/img/work/mckduck/phone9.png";
import phone3Bottom from "../../../../public/img/work/mckduck/phone10.webp";
import kryaIpadImage from "../../../../public/img/work/mckduck/krya-ipad.webp";
import PreviewImage from "../../../../public/img/work/code-storage/preview.webp";

import { NextPageSection } from "@/components/sections/NextPageSection";
import {useLanguage} from "@/context/LanguageContext";

export default function Page() {
  const { t } = useLanguage();
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>McDuckMist</>}
          subTitle={
            <span className="text-[#362EEC] xl:text-[125px]">Telegram MA</span>
          }
          table={[
            { title: "Year:", value: "2026" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "GameFi" },
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
              {t.workPages.mckduck.titleOne}
            </p>
            <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] max-w-[495px]">
              {t.workPages.mckduck.descriptionOne}
            </p>
          </div>
        </section>



        <section className="bg-[#FAFCFC] pt-[60px] pb-[60px] lg:pt-[80px] lg:pb-[80px] xl:pt-[120px] xl:pb-[120px]">
          <div className=" pb-[60px] lg:pb-[80px] xl:pb-[120px]">
            <Image
                className="animate__animated opacity-0 container mckduck-center"
                data-animation="animate__fadeInUp"
                src={kryaCenterImage}
                alt=""
                quality={95}
                priority
            />
          </div>


          <div className="container center-bottom flex flex-col lg:flex-row">

            <div className="center-bottom_left flex flex-col lg:mr-[30px]">
              <p className="font-inter leading-[100%] text-[24px] md:text-[30px] xl:text-[40px] mb-[20px] font-medium text-[#404040] lg:max-w-[603px] xl:max-w-[701px]">
                {t.workPages.mckduck.titleCenter}
              </p>
              <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] lg:max-w-[603px] xl:max-w-[701px]">
                {t.workPages.mckduck.descriptionCenter}
              </p>

              <div className="grid grid-cols-2 gap-[23px] sm:gap-[0px] lg:grid-cols-none pt-[30px] sm:pt-[35px] md:pt-[50px]">
                <div className="md:flex">
                  <div className="flex flex-col font-bold text-[60px] md:text-[90px] xl:text-[140px] md:mr-[60px] text-[#362EEC]">
                    50+
                    <span className="font-inter font-medium text-[24px] md:text-[30px] text-[#8B8B8B]">{t.workPages.mckduck.screens}</span>
                  </div>
                  <div className="flex flex-col font-bold text-[60px] md:text-[90px] xl:text-[140px] ">
                    30+
                    <span className="font-inter font-medium text-[24px] md:text-[30px] text-[#8B8B8B]">{t.workPages.mckduck.components}</span>
                  </div>


                </div>

                <div className="center-bottom_right justify-self-end lg:hidden">
                  <Image
                      className="animate__animated opacity-0 sm:w-[220px] sm:h-[456.91px] md:w-[223px] md:h-[463px]"
                      data-animation="animate__fadeInUp"
                      sizes="100vw"
                      src={kryaCenterImage2}
                      alt=""
                      quality={95}
                      priority
                  />
                </div>
              </div>
            </div>
            <div className="center-bottom_right hidden lg:flex lg:ml-auto">
              <Image
                  className="animate__animated opacity-0 lg:w-[287px] lg:h-[596px] xl:w-[390px] xl:h-[810px]"
                  data-animation="animate__fadeInUp"
                  sizes="100vw"
                  src={kryaCenterImage2}
                  alt=""
                  quality={95}
                  priority
              />
            </div>

          </div>

        </section>





        <section className="bg-[#26292E]">
          <div className="mckduck-phone__top grid grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-[30px] xl:gap-[20px] container pt-[60px] lg:pt-[80px] xl:pt-[120px]">
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone1Top}
                alt=""
                quality={100}
                sizes="50vw"
                unoptimized
                priority
            />
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone2Top}
                alt=""
                quality={100}
                sizes="50vw"
                unoptimized
                priority
            />
          </div>
          <div className="mckduck-phone__center grid grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-[40px] md:gap-x-[30px] md:gap-y-[60px] lg:gap-y-[80px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[120px]    megaXXXl::grid-cols-none       megaXXXl:flex megaXXXl:gap-x-[20px] megaXXXl:justify-center megaXXXl:overflow-hidden      pt-[40px] md:pt-[60px] lg:pt-[80px] xl:pt-[120px]">
            <Image
                className="animate__animated opacity-0 megaXXXl:-ml-[50%]"
                data-animation="animate__fadeInUp"
                src={phone1Center}
                alt=""
                quality={100}
                unoptimized
                priority

            />
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone2Center}
                alt=""
                quality={100}
                unoptimized
                priority

            />
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone3Center}
                alt=""
                quality={100}
                unoptimized
                priority

            />
            <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={phone4Center}
                alt=""
                quality={100}
                unoptimized
                priority

            />
            <div
                className="animate__animated opacity-0 megaXXXl:-mr-[50%] relative"
                data-animation="animate__fadeInUp"
            >
              <Image
                  src={phone5Center}
                  alt=""
                  quality={100}
                  unoptimized
                  priority
                  className="w-full h-full"
              />
              <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-[8%] left-[8%] w-[84%] h-[84%] object-cover rounded-[12px] z-[1]"
              >
                <source src="/img/work/mckduck/kryaVideo.webm" type="video/webm" />
              </video>
            </div>

          </div>
          <div className="mckduck-phone__bottom container grid grid-cols-2 md:grid-cols-3 gap-x-[10px] gap-y-[40px] md:gap-x-[30px] xl:gap-[20px] md:gap-y-[0px] pb-[40px] md:pb-[60px] lg:pb-[80px] xl:pb-[120px]">
            <Image
                className="animate__animated opacity-0 lg:mr-[20px]"
                data-animation="animate__fadeInUp"
                src={phone1Bottom}
                alt=""
                quality={100}
                unoptimized
                priority
            />
            <Image
                className="animate__animated opacity-0 lg:mr-[20px]"
                data-animation="animate__fadeInUp"
                src={phone2Bottom}
                alt=""
                quality={100}
                unoptimized
                priority
            />
            <Image
                className="animate__animated opacity-0  lg:mr-[20px]"
                data-animation="animate__fadeInUp"
                src={phone3Bottom}
                alt=""
                quality={100}
                unoptimized
                priority
            />

          </div>


          <div className="container grid grid-cols-1 overflow-hidden h-[15vw] md:h-[10vw] xl:h-[6vw] relative justify-end">
            <div className="relative overflow-hidden h-full w-full max-w-[50%] md:max-w-[33.33%] ml-auto">
              <Image
                  className="absolute top-0 left-0 w-full h-auto animate__animated opacity-0"
                  data-animation="animate__fadeInUp"
                  src={phone3Bottom}
                  alt=""
                  quality={100}
                  unoptimized
                  priority
                  style={{ transform: 'translateY(-75%)' }}
              />
            </div>
          </div>

        </section>





        <section className=" bg-[#F8F8F8] py-[60px] lg:py-[80px] xl:py-[120px]">
          <div className="container flex flex-col items-center">
            <div className="mb-[60px] lg:mb-[80px] xl:mb-[120px]">
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
                  {t.workPages.mckduck.titleTwo}
                </p>
                <p className="font-inter text-[17px] leading-[130%] md:text-[18px] font-medium text-[#404040] lg:max-w-[495px] lg:w-[50%]">
                  {t.workPages.mckduck.descriptionTwo}
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-col">
              <Image
                  className="mb-[30px]"
                  src={kryaIpadImage}
                  quality={95}
                  sizes="100vw"
                  alt=""
              />
              <span className="font-inter font-medium text-[17px] md:text-[18px] text-[#404040] lg:max-w-[448px] xl:max-w-[596px]">
                {t.workPages.mckduck.descriptionFooter}
              </span>
            </div>
          </div>
        </section>

        <NextPageSection
          projectKey="codeStorage"
          bgColor="#DFE2E8"
          href="https://snipit.ru/"
          image={PreviewImage}
        />
      </main>
      <Footer />
    </>
  );
}
