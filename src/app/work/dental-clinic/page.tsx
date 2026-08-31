import { Svg } from "@/components/Svg";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import Phone1Image from "../../../../public/img/work/dental-clinic/phone1.webp";
import Phone2Image from "../../../../public/img/work/dental-clinic/phone2.webp";
import Phone3Image from "../../../../public/img/work/dental-clinic/phone3.webp";

import BoshkaImage from "../../../../public/img/work/dental-clinic/boshka.webp";

import Tablet2Image from "../../../../public/img/work/dental-clinic/tablet2.webp";

import PrewiewImage from "../../../../public/img/work/vinyl/preview.webp";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";
import AutoplayVideo from "@/components/video/AutoplayVideo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>Dental clinic</>}
          subTitle={<span className="text-[#362EEC]">Ortodent</span>}
          table={[
            { title: "Year:", value: "2024" },
            { title: "Services:", value: "Design & Development" },
            { title: "Industry:", value: "Medical / Healthcare" },
          ]}
          arrow={true}
        />

        <section className="relative xl:pb-[120px]">

        <picture className="w-full">
          <source className="w-[476px] min-h-[350px]" srcSet="/img/work/dental-clinic/main-480.webp" media="(max-width: 480px)" />
          <img className="w-[1216px] mx-auto min-h-[350px] object-cover md:min-h-[800px]" src="/img/work/dental-clinic/main.webp" alt="" />
        </picture>

          <div className="flex items-center justify-center absolute top-[50%] left-[50%] md:top-[49%] xl:top-[44%] md:left-[50%] -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[100px]">
            <div
              className="animate__animated opacity-0"
              data-animation="animate__fadeInUp"
            >
              <Svg
                className="w-full h-full md:w-[220px] md:h-[100px]"
                width={99}
                height={49}
                iconId="icon-logo-dental"
              />
            </div>
          </div>
        </section>
        <div className="flex w-full items-center justify-between bg-[#D8DEE4]">
          <div className="container flex flex-col items-center justify-center pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:pb-[120px] lg:pt-[100px]">
            <AutoplayVideo path="/img/work/dental-clinic/ortodent1.webm" />
            <div className="grid grid-cols-3 gap-[10px] sm:gap-[20px] md:gap-[30px] xl:gap-[72px] mt-[40px] xl:mt-[70px]">
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="0"
                src={Phone1Image}
                alt=""
                sizes="33vw"
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                src={Phone2Image}
                alt=""
                sizes="33vw"
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="400"
                src={Phone3Image}
                alt=""
                sizes="33vw"
                quality={95}
              />
            </div>
          </div>
        </div>
        <Image
          className="w-full"
          src={BoshkaImage}
          alt=""
          sizes="100vw"
          quality={95}
        />
        <div className="flex w-full items-center justify-between bg-white">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[90px] lg:pb-[120px] lg:pt-[100px]">
            <AutoplayVideo path="/img/work/dental-clinic/ortodent2.webm" />

            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 sm:gap-[20px]">
            <picture className="w-full">
              <source 
                srcSet="/img/work/dental-clinic/tablet1-360.webp" 
                media="(max-width: 360px)" 
                type="image/webp" 
              />
              <source 
                srcSet="/img/work/dental-clinic/tablet1-480.webp" 
                media="(max-width: 480px)" 
                type="image/webp" 
              />
              <source 
                srcSet="/img/work/dental-clinic/tablet1-768.webp" 
                media="(max-width: 768px)" 
                type="image/webp" 
              />
              <source 
                srcSet="/img/work/dental-clinic/tablet1-960.webp" 
                media="(max-width: 960px)" 
                type="image/webp" 
              />
              <img 
                className="animate__animated opacity-0 w-full" 
                data-animation="animate__fadeInUp" 
                data-delay="0" 
                src="/img/work/dental-clinic/tablet1.webp" 
                alt="Стоматологическая клиника" 
              />
            </picture>
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                src={Tablet2Image}
                alt=""
                sizes="50vw"
                quality={95}
              />
            </div>
          </div>
        </div>
        <NextPageSection
          projectKey="vinylStore"
          bgColor="#EFE9D8"
          image={PrewiewImage}
          href="/work/vinyl"
        />
      </main>
      <Footer />
    </>
  );
}
