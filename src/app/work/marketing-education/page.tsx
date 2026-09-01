import { Svg } from "@/components/Svg";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import Phone1Image from "../../../../public/img/work/marketing-education/phone1.webp";
import Phone2Image from "../../../../public/img/work/marketing-education/phone2.webp";
import Phone3Image from "../../../../public/img/work/marketing-education/phone3.webp";

import Tablet1Image from "../../../../public/img/work/marketing-education/tablet1.webp";

import PrewiewImage from "../../../../public/img/work/photographer/preview.webp";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";
import AutoplayVideo from "@/components/video/AutoplayVideo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>Marketing</>}
          subTitle={<span className="text-[#362EEC]">Education</span>}
          table={[
            { title: "Year:", value: "2025" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Business / Marketing" },
          ]}
          arrow={true}
        />

        <section className="relative xl:pb-[120px]">

        <picture className="w-full">
          <source className="w-[476px] min-h-[350px]" srcSet="/img/work/marketing-education/main-480.webp" media="(max-width: 480px)" />
          <img className="w-[1216px] mx-auto min-h-[350px] object-cover md:min-h-[800px]" src="/img/work/marketing-education/main.webp" alt="" />
        </picture>

          <div className="flex items-center justify-center absolute top-[53%] left-[50%] xl:top-[43%] xl:left-[50%] -translate-x-1/2 -translate-y-1/2">
            <div
              className="animate__animated opacity-0"
              data-animation="animate__fadeInUp"
            >
              <Svg
                className="w-[76.74px] h-[61.26px] md:w-[153.48px] md:h-[122.52px]"
                iconId="icon-logo-marketing"
              />
            </div>
          </div>
        </section>
        <div className="flex w-full items-center justify-between bg-[linear-gradient(89.8deg,_#000019_-4.56%,_#000125_50.37%,_#00021F_104.21%)]">
          <div className="container flex flex-col items-center justify-center pt-[40px] sm:pt-[60px] lg:pt-[100px]">
            <AutoplayVideo path="/img/work/marketing-education/marketing2.webm" />
            <div className="grid grid-cols-3 gap-[10px] xs:gap-[20px] sm:gap-[30px] lg:gap-[72px] pt-[40px] md:pt-[80px] lg:pt-[60px] xl:pt-[100px]">
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
        <picture className="w-full">
          <source className="w-[360px] min-h-[350px]" srcSet="/img/work/marketing-education/boshka-360.webp" media="(max-width: 360px)" />
          <source className="w-[360px] min-h-[350px]" srcSet="/img/work/marketing-education/boshka-480.webp" media="(max-width: 480px)" />
          <source className="w-[360px] min-h-[350px]" srcSet="/img/work/marketing-education/boshka-768.webp" media="(max-width: 768px)" />
          <source className="w-[360px] min-h-[350px]" srcSet="/img/work/marketing-education/boshka-960.webp" media="(max-width: 960px)" />
          <img className="w-full mx-auto min-h-[px] object-cover md:min-h-[800px]" src="/img/work/marketing-education/boshka.webp" alt="" />
        </picture>
        <div className="flex w-full items-center justify-between bg-white">
          <div className="container flex flex-col items-center justify-center gap-[40px] pb-[60px] pt-[40px] sm:pb-[80px] sm:pt-[60px] lg:gap-[90px] lg:pb-[120px] lg:pt-[100px]">
            <AutoplayVideo path="/img/work/marketing-education/marketing1.webm" />

            <div>
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="0"
                src={Tablet1Image}
                alt=""
                sizes="50vw"
                quality={95}
              />
            </div>
          </div>
        </div>
        <NextPageSection
          projectKey="photographer"
          bgColor="bg-[#D9E4E3]"
          image={PrewiewImage}
          href="/work/photographer"
        />
      </main>
      <Footer />
    </>
  );
}
