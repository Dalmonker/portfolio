import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";

import Banner1Image from "../../../../public/img/work/404/error1.webp";
import Banner2Image from "../../../../public/img/work/404/error2.webp";
import Banner3Image from "../../../../public/img/work/404/error3.webp";
import Banner4Image from "../../../../public/img/work/404/error4.webp";
import Banner5Image from "../../../../public/img/work/404/error5.webp";
import PreviewImage from "../../../../public/img/work/meducation/preview.webp";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>404 page</>}
          subTitle={<span className="text-[#362EEC]">collection</span>}
          table={[
            { title: "Year:", value: "2023-2024" },
            { title: "Services:", value: "Design" },
            { title: "Industry:", value: "Error page" },
          ]}
          arrow={true}
        />
        <section className="container">
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px] xl:mb-[120px]"
            src={Banner1Image}
            alt=""
            priority
          />
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px] xl:mb-[120px]"
            src={Banner2Image}
            alt=""
            priority
          />
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px] xl:mb-[120px]"
            src={Banner3Image}
            alt=""
          />
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px] xl:mb-[120px]"
            src={Banner4Image}
            alt=""
          />
          <Image
            sizes="100vw"
            quality={95}
            className="mb-[60px] md:mb-[80px] xl:mb-[120px]"
            src={Banner5Image}
            alt=""
          />
        </section>
        <NextPageSection
          image={PreviewImage}
          href="https://www.mymeducation.ru/"
          bgColor="#E30077"
          projectKey="meducation"
        />
      </main>
      <Footer />
    </>
  );
}
