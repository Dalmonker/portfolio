import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Svg } from "@/components/Svg";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/photographer/main.webp";
import TabletImage from "../../../../public/img/work/photographer/tablet.webp";
import Mob1Image from "../../../../public/img/work/photographer/mob1.webp";
import Mob2Image from "../../../../public/img/work/photographer/mob2.webp";
import Mob3Image from "../../../../public/img/work/photographer/mob3.webp";
import Main2Image from "../../../../public/img/work/photographer/main2.webp";
import Tablet2Image from "../../../../public/img/work/photographer/tablet2.webp";
import PreviewImage from "../../../../public/img/work/web-banners/preview.webp";
import { NextPageSection } from "@/components/sections/NextPageSection";
import AutoplayVideo from "@/components/video/AutoplayVideo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={
            <>
              Ph<span className="text-[#362EEC]">o</span>t
              <span className="text-[#362EEC]">o</span>grapher
            </>
          }
          subTitle={
            <>
              <span className="text-[#362EEC]">portfolio</span>
            </>
          }
          table={[
            { title: "Year:", value: "2023" },
            { title: "Services:", value: "Design & Development" },
            { title: "Industry:", value: "Art / photo" },
          ]}
        />
        <section className="relative xl:mb-[120px]">
            <div className="container miniSm:p-[0]">
              <Image
              className="min-h-[350px] w-full object-cover md:min-h-[800px]"
              src={MainBgImage}
              alt=""
              quality={90}
              layout="responsive"
              priority
            />
            </div>
          <div className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[100px]">
            <div
              className="animate__animated opacity-0"
              data-animation="animate__fadeInUp"
            >
              <Svg
                className="w-full h-full md:w-[197px] md:h-[97px]"
                width={99}
                height={49}
                iconId="icon-logo-photographer"
              />
            </div>
          </div>
        </section>
        <section className=" bg-[#E5E0DC] py-[60px] md:pt-[50px] md:pb-[80px] xl:pt-[80px] xl:pb-[120px] overflow-hidden">
          <div className="container flex flex-col items-center">
            <AutoplayVideo
              className="mb-[60px] xl:mb-[90px]"
              path="/img/work/photographer/video1.webm"
            />

            <div className=" grid grid-cols-3 gap-[10px] sm:gap-[30px] md:gap-[40px] lg:gap-[52px] xl:gap-[72px]">
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                src={Mob1Image}
                alt=""
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                src={Mob2Image}
                alt=""
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="400"
                src={Mob3Image}
                alt=""
                quality={95}
              />
            </div>
          </div>
        </section>
        <section className="flex overflow-hidden">
          <Image
            className="min-h-[350px] object-cover md:min-h-[800px]"
            src={Main2Image}
            alt=""
            quality={95}
            sizes="100vw"
            layout="responsive"
            priority
          />
        </section>
        <section className="flex py-[60px] lg:py-[80px] xl:pb-[100px] bg-[#E5E0DC] overflow-hidden relative">
          <div className="container flex items-center justify-center">
            <AutoplayVideo
              className=""
              path="/img/work/photographer/video2.webm"
            />
          </div>
        </section>
        <NextPageSection
          projectKey="webBanners"
          href="/work/web-banners"
          bgColor="#000000"
          image={PreviewImage}
        />
      </main>
      <Footer />
    </>
  );
}
