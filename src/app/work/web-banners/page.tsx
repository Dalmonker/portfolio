import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";

import B1Image from "../../../../public/img/work/web-banners/02.webp";
import B2Image from "../../../../public/img/work/web-banners/03.webp";

import Banner1Image from "../../../../public/img/work/web-banners/banner1.webp";
import Banner2Image from "../../../../public/img/work/web-banners/banner2.webp";
import Banner3Image from "../../../../public/img/work/web-banners/banner3.webp";
import Banner4Image from "../../../../public/img/work/web-banners/banner4.webp";
import Banner5Image from "../../../../public/img/work/web-banners/banner5.webp";
import Banner6Image from "../../../../public/img/work/web-banners/banner6.webp";

import PreviewImage from "../../../../public/img/work/mckduck/preview.webp";
import AutoplayVideo from "@/components/video/AutoplayVideo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>Banners collection</>}
          table={[
            { title: "Scope:", value: "End-to-end product design" },
            { title: "Industry:", value: "Digital Marketing" },
            { title: "Year:", value: "2024-2026" },
          ]}
          arrow={true}
        />

        <section className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[20px] mb-[60px] md:mb-[80px] xl:mb-[120px]">
            <Image sizes="100vw" quality={95} src={B1Image} alt="" />
            <Image sizes="100vw" quality={95} src={B1Image} alt="" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[20px] mb-[60px] md:mb-[80px] xl:mb-[120px]">
            <Image sizes="100vw" quality={95} src={B2Image} alt="" />
            <AutoplayVideo path="/img/work/web-banners/banner1.webm" />
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[20px] mb-[60px] md:mb-[80px] xl:mb-[120px]">
            <AutoplayVideo
                className=" border border-[#E5E5E7]"
                path="/img/work/web-banners/banner.webm"
            />
            <Image
              sizes="100vw"
              quality={95}
              className="flex-1 w-full"
              src={Banner3Image}
              alt=""
            />
          </div>

          <Image
              quality={95}
              sizes="100vw"
              className="mb-[60px] md:mb-[80px] xl:mb-[120px] w-full"
              src={Banner6Image}
              alt=""
          />

          <Image
              quality={95}
              sizes="100vw"
              className="mb-[60px] md:mb-[80px] xl:mb-[120px] w-full"
              src={Banner4Image}
              alt=""
          />

          <Image
              quality={95}
              sizes="100vw"
              className="mb-[60px] md:mb-[80px] xl:mb-[120px]"
              src={Banner5Image}
              alt=""
          />

        </section>
        <NextPageSection
          image={PreviewImage}
          href="/work/mckduck"
          bgColor="#DFE2E8"
          projectKey="mcduckmist"
        />
      </main>
      <Footer />
    </>
  );
}
