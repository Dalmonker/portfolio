import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Svg } from "@/components/Svg";
import { MainSection1 } from "@/components/sections/MainSection1";

import MainBgImage from "../../../../public/img/work/vinyl/main.webp";
import Tablet1Image from "../../../../public/img/work/vinyl/tablet1.webp";
import Tablet2Image from "../../../../public/img/work/vinyl/tablet2.webp";
import IpadImage from "../../../../public/img/work/vinyl/ipad.webp";
import MainBgImage2 from "../../../../public/img/work/vinyl/main2.webp";
import LandingImage from "../../../../public/img/work/vinyl/lending.webp";
import Ipad2Image from "../../../../public/img/work/vinyl/ipad2.webp";
import ErrorImage from "../../../../public/img/work/vinyl/error.webp";

import Mob1Image from "../../../../public/img/work/vinyl/phone1.webp";
import Mob2Image from "../../../../public/img/work/vinyl/phone2.webp";
import Mob3Image from "../../../../public/img/work/vinyl/phone3.webp";

import PreviewImage from "../../../../public/img/work/photographer/preview.webp";
import { NextPageSection } from "@/components/sections/NextPageSection";
import AutoplayVideo from "@/components/video/AutoplayVideo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>vinyl record</>}
          subTitle={
            <span className="text-[#362EEC] xl:text-[125px]">e-commerce</span>
          }
          table={[
            { title: "Year:", value: "2024" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Music" },
          ]}
          arrow={true}
        />
        <section className="relative xl:mb-[120px]">
          <div className="container miniSm:p-[0]">
            <Image
              className="w-full min-h-[350px] object-cover md:min-h-[800px]"
              src={MainBgImage}
              alt=""
              quality={90}
              sizes="100vw"
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
                className="w-full h-full md:w-[600px] md:h-[130px]"
                width={235}
                height={50}
                iconId="icon-logo-vinyl"
              />
            </div>
          </div>
        </section>
        <section className=" bg-[#F2F2F2] pt-[40px] pb-[60px] md:pt-[60px] md:pb-[80px] xl:pt-[100px] xl:pb-[120px]">
          <div className="container flex flex-col items-center">
            <AutoplayVideo
              className="mb-[50px] md:mb-[60px] xl:mb-[100px]"
              path="/img/work/vinyl/vinyl1.webm"
            />
            <Image src={IpadImage} sizes="100vw" alt="" quality={95} />
          </div>
        </section>

        <section className="flex">
          <Image
            className="min-h-[350px] object-cover md:min-h-[800px]"
            src={MainBgImage2}
            alt=""
            quality={95}
            sizes="100vw"
            layout="responsive"
            priority
          />
        </section>

        <section className=" bg-[#F2F2F2] py-[50px] md:pt-[60px] md:pb-[70px] xl:pt-[100px] xl:pb-[110px]">
          <div className="container flex flex-col items-center">
            <AutoplayVideo
              path="/img/work/vinyl/vinyl2.webm"
            />

            <div className=" grid grid-cols-3 gap-[10px] mt-[50px] md:mt-[60px] xl:mt-[100px] md:gap-[20px] xl:gap-[28px]">
              <Image
                className="animate__animated opacity-0 "
                data-animation="animate__fadeInUp"
                sizes="33vw"
                src={Mob1Image}
                alt=""
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                sizes="33vw"
                src={Mob2Image}
                alt=""
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="400"
                sizes="33vw"
                src={Mob3Image}
                alt=""
                quality={95}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#EEEEE5] py-[60px] md:py-[80px] xl:py-[120px]">
          <div className="container flex items-center flex-col gap-[60px] md:gap-[80px] xl:gap-[120px]">
            <AutoplayVideo
              className="vinyl-border"
              path="/img/work/vinyl/vinyl3.webm"
            />
            <Image src={Ipad2Image} sizes="100vw" quality={95} alt="" />
          </div>
        </section>
        <section className="bg-[#FFFFFF] py-[60px] md:py-[80px] xl:py-[120px]">
          <div className="container">
            <Image src={ErrorImage} sizes="100vw" quality={95} alt="" />
          </div>
        </section>
        <NextPageSection
            projectKey="photographer"
            bgColor="#D9E4E3"
            href="/work/photographer"
            image={PreviewImage}
        />
      </main>
      <Footer />
    </>
  );
}
