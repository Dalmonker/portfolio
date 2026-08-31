import Image from "next/image";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import MainBgImage from "../../../../public/img/work/tennis/main.webp";

import Mob1Image from "../../../../public/img/work/tennis/mob1.webp";
import Mob2Image from "../../../../public/img/work/tennis/mob2.webp";
import Mob3Image from "../../../../public/img/work/tennis/mob3.webp";

import Tablet2Image from "../../../../public/img/work/tennis/tablet2.webp";

import Mob5Image from "../../../../public/img/work/tennis/mob5.webp";
import Mob4Image from "../../../../public/img/work/tennis/mob4.webp";

import PreviewImage from "../../../../public/img/work/marketing-education/preview.webp";
import { MainSection1 } from "@/components/sections/MainSection1";
import { NextPageSection } from "@/components/sections/NextPageSection";
import AutoplayVideo from "@/components/video/AutoplayVideo";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <MainSection1
          title={<>tennis club</>}
          subTitle={<span className="text-[#362EEC]">on Nemiga</span>}
          table={[
            { title: "Year:", value: "2024" },
            { title: "Services:", value: "Design & Development" },
            { title: "Industry:", value: "Sport" },
          ]}
          arrow={true}
        />
        <section className="relative">


        {/* <picture className="w-full">
          <source className="w-[476px] min-h-[350px]" srcSet="/img/work/tennis/main-480.webp" media="(max-width: 480px)" />
          <img className="w-[1216px] mx-auto min-h-[350px] object-cover md:min-h-[800px]" src="/img/work/tennis/main.webp" alt="" />
        </picture> */}

        <div className="container miniSm:p-[0] xl:pb-[120px]">
           <Image
              className="object-cover min-h-[350px] md:min-h-[800px]"
              src={MainBgImage}
              sizes="100vw"
              layout="responsive"
              quality={80}
              priority
              alt=""
            />
          </div>
          <div className="flex items-center justify-center absolute xl:top-[45%] top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[200px] md:h-[100px]">
            <div
              className="animate__animated opacity-0"
              data-animation="animate__fadeInUp"
            >
              <svg className="md:w-[156px] md:h-[149px]" width="72" height="69" viewBox="0 0 156 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 133.753H0V17.3256H20V65.3937H30.8333V17.3256L50.8333 0V133.753H30.8333V85.3527H20V133.753Z" fill="url(#paint0_linear_331_1772)"/>
                <path d="M66.3333 19.9591H50.8333V0H101.667V19.9591H86.3333V149H66.3333V19.9591Z" fill="url(#paint1_linear_331_1772)"/>
                <path d="M101.667 0L122 17.3256V71.5477L135 17.3256H155.833L141.5 75.3732L156 133.753H135.167L122 78.0344V133.587H101.667V0Z" fill="url(#paint2_linear_331_1772)"/>
                <defs>
                  <linearGradient id="paint0_linear_331_1772" x1="14.717" y1="8.96802e-07" x2="206.227" y2="106.194" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E2FF2E"/>    {/* <-- было stop-color, стало stopColor */}
                    <stop offset="1" stopColor="#C2F828"/>  {/* <-- было stop-color, стало stopColor */}
                    <stop offset="1" stopColor="#CEFB2A"/>  {/* <-- было stop-color, стало stopColor */}
                  </linearGradient>
                  <linearGradient id="paint1_linear_331_1772" x1="14.717" y1="8.96802e-07" x2="206.227" y2="106.194" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E2FF2E"/>
                    <stop offset="1" stopColor="#C2F828"/>
                    <stop offset="1" stopColor="#CEFB2A"/>
                  </linearGradient>
                  <linearGradient id="paint2_linear_331_1772" x1="14.717" y1="8.96802e-07" x2="206.227" y2="106.194" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E2FF2E"/>
                    <stop offset="1" stopColor="#C2F828"/>
                    <stop offset="1" stopColor="#CEFB2A"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

        

        </section>
        <section className="bg-[#E2E2E2]">
          <div className="container flex flex-col items-center justify-center pb-[60px] pt-[40px] md:pb-[80px] md:pt-[60px] xl:pb-[120px] xl:pt-[100px]">
            <AutoplayVideo path="/img/work/tennis/tennis1.webm" />
            <div className="grid grid-cols-3 gap-[10px] md:gap-[20px] xl:gap-[28px] mt-[30px] mb-[50px] md:mt-[40px] md:mb-[80px] xl:mt-[70px] xl:mb-[120px]">
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="0"
                quality={95}
                sizes="33vw"
                src={Mob1Image}
                layout="responsive"
                alt=""
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                quality={95}
                sizes="33vw"
                src={Mob2Image}
                layout="responsive"
                alt=""
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="400"
                quality={95}
                sizes="33vw"
                src={Mob3Image}
                layout="responsive"
                alt=""
              />
            </div>
            <Image
              quality={95}
              sizes="100vw"
              layout="responsive"
              src={Tablet2Image}
              alt=""
            />
          </div>
        </section>

        <section className="flex w-full items-center justify-between bg-white">
          <div className="container flex flex-col items-center justify-center pt-[50px] pb-[60px] md:pt-[60px] md:pb-[80px] xl:pt-[100px] xl:pb-[120px]">
            <AutoplayVideo path="/img/work/tennis/tennis2.webm" />
            <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-[20px] mt-[50px] md:mt-[60px] xl:mt-[95px]">
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="0"
                src={Mob5Image}
                sizes="50vw"
                alt=""
                quality={95}
              />
              <Image
                className="animate__animated opacity-0"
                data-animation="animate__fadeInUp"
                data-delay="200"
                src={Mob4Image}
                sizes="50vw"
                alt=""
                quality={95}
              />
            </div>
          </div>
        </section>
        <NextPageSection
          projectKey="marketingEducation"
          href="/work/marketing-education"
          image={PreviewImage}
          bgColor="#010221"
        />
      </main>
      <Footer />
    </>
  );
}
