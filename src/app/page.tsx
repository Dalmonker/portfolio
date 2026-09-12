"use client";
import { Svg } from "@/components/Svg";
import Image from "next/image";
import { SlideOnScroll } from "@/components/logics/SlideOnScroll";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Header } from "@/components/Header";
import AutoplayVideo from "@/components/video/AutoplayVideo";
import Magnetic from "@/components/logics/Magnetic";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { useWindowSize } from "./useWindowSize"

import Img1 from "../../public/img/slider/img1.webp";
import Img2Vid from "../../public/img/slider/img2video.webp";
import Img2 from "../../public/img/slider/img2.webp";
import Img3 from "../../public/img/slider/img3.webp";
import Img5 from "../../public/img/slider/img5.webp";
import Img6 from "../../public/img/slider/img6.webp";
import Img7 from "../../public/img/slider/img7.webp";

import { WorkItem } from "@/components/WorkItem";

import ImgWork1 from "../../public/img/work/mckduck/preview.webp";
import ImgWork2 from "../../public/img/work/web-banners/preview.webp";
import ImgWork3 from "../../public/img/work/medical-dashboard/preview.webp";

export type WorkType = {
  cardKey: string;
  date: string;
  href: string;
  img: string;
  bg: string;
};

export default function Home() {
  const { t } = useLanguage();

 const icons = [
  { name: 'Ae', src: '/img/icons/1.svg' },
  { name: 'Ps', src: '/img/icons/2.svg' },
  { name: 'Ai', src: '/img/icons/3.svg' },
  { name: 'Pr', src: '/img/icons/4.svg' },
  { name: 'Id', src: '/img/icons/5.svg' },
  { name: 'Fg', src: '/img/icons/6.svg' },
  { name: 'Of', src: '/img/icons/7.svg' },
  { name: 'Lr', src: '/img/icons/8.svg' },
  { name: 'Xd', src: '/img/icons/9.svg' },
  { name: 'Dr', src: '/img/icons/10.svg' },
];

  const works: WorkType[] = [
  {
    cardKey: "Telegram Mini App",
    date: "2026",
    href: "/work/mckduck",
    img: "/img/work/mckduck/preview.webp",
    bg: "bg-[#D8DEE4]",
  },
  {
    cardKey: "Web banners collection",
    date: "2023-2026",
    href: "/work/web-banners",
    img: "/img/work/web-banners/preview.webp",
    bg: "bg-[#26292E]",
  },
  {
    cardKey: "medical dashboard",
    date: "2025",
    href: "/work/medical-dashboard",
    img: "/img/work/medical-dashboard/preview.webp",
    bg: "bg-[#F0F1EC]",
  },
];

  const { width } = useWindowSize();
  const isLargeScreen = width >= 768;

  return (
    <>
      <Header iconColor="text-blackText"/>
      <main className="flex flex-col">



  <section className="relative flex flex-col items-center bg-grayBg overflow-hidden h-dvh sm:pb-[60px]">

    <div className="relative flex uppercase flex-1 w-full z-11">
      <div className="animate-left absolute -left-full z-0 whitespace-nowrap top-[120px] md:top-[200px] text-[160px] font-bold leading-[80%] text-blackTitle sm:text-[200px] lg:text-[280px]">
        Product ui ux Product ui ux Product ui ux Product ui ux Product ui ux Product ui ux Product ui
        ux Product ui ux Product ui ux Product ui ux
      </div>
    </div>


{/* <Image
  src="/img/portrait/IMG_4580.png"
  alt=""
  width={1268}
  height={1185}
  className="
  max-w-[633px] max-h-[780px] 
  sm:max-w-[833px] sm:max-h-[980px]
  md:max-w-[933px] md:max-h-[1080px] 
  lg:max-w-[833px] lg:max-h-[980px] 
  object-contain absolute bottom-[0px] left-[-50px] md:left-[50px] lg:left-[200px]
  xl:left-1/2 xl:-translate-x-1/2
  xl:max-w-none xl:max-h-[100vh]
  "
  quality={95}
  priority
/> */}



<div className="absolute bottom-0 h-[88%] sm:h-[85%] xl:h-full pointer-events-none select-none z-10 translate-x-[15%] xl:translate-x-[0%]">
  <Image
    src="/img/portrait/IMG_4580.png"
    alt=""
    width={1268}
    height={1185}
    priority
    quality={95}
    className="h-full w-auto max-w-none object-contain object-right-bottom"
  />
</div>



      {/* <picture className="w-full h-full z-10">
        <source srcSet="/img/portrait/photoHead.png" media="(min-width: 1240px)" />
        <source srcSet="/img/portrait/photoHead-768.png" media="(min-width: 768px)" />
        <source srcSet="/img/portrait/photoHead-480.png" media="(min-width: 480px)" />
        <img
            className="w-full h-full object-cover sm:mt-[60px] md:w-auto lg:w-full lg:object-contain"
            src="/img/portrait/IMG_4580.png"
            alt=""
            loading="eager"
        />
      </picture> */}



    {/* <div className="absolute inset-0 uppercase flex items-end justify-center z-20 pointer-events-none">
      <div className="animate-right absolute -right-full bottom-[150px] z-20 whitespace-nowrap text-[160px] font-bold leading-[80%] text-white opacity-85 sm:text-[200px] md:bottom-[112px] lg:bottom-[152px] lg:text-[280px]">
        Designer Designer Designer Designer Designer Designer Designer
        Designer Designer Designer
      </div>
    </div> */}

<div className="hidden sm:block absolute xl:z-0 top-[36%] md:top-[43%] lg:top-[54%] xl:top-[45%] left-0 pl-[20px] xl:left-auto xl:right-0 xl:pr-[80px] xl:pl-0 z-20 text-[40px] md:text-[60px] text-[#404040] pointer-events-none uppercase">
  Designer
</div>




    <div className="flex flex-col xl:block items-start xl:items-end xl:justify-between absolute bottom-0 left-0 right-0 z-30 pb-[36px] xl:pb-0">

      <div className="font-inter font-medium text-[17px] text-[#ffffff] md:text-[#404040] md:text-[18px] ml-[20px] xl:ml-[30px] megaXXl:ml-[80px] max-w-[243px] sm:max-w-[246px] md:max-w-[269px] lg:max-w-[282px] xl:max-w-[304px] mb-[14px] xl:mb-[0px] whitespace-pre-line xl:absolute xl:left-0 xl:bottom-[36px]">
        {t.home.resume}
      </div>

      <div className="self-stretch mx-[20px] xl:mx-0 shrink-0 px-5 py-4 md:px-[16px] md:py-[16px] rounded-3xl
      grid grid-cols-5 md:grid-cols-10 gap-2.5
      bg-white/5 backdrop-blur-[1.5px] backdrop-saturate-150
      border-none border-white/15
      ring-1 ring-inset ring-white/10
      shadow-[-8px_0_16px_-4px_rgba(0,0,0,0.25),8px_0_16px_-4px_rgba(0,0,0,0.25)]
      z-30 relative mb-[14px] xl:mb-[0px] xl:absolute xl:left-1/2 xl:-translate-x-1/2 xl:bottom-[36px]
      xl:w-max xl:gap-[10px]">
        {icons.map((icon) => (
            <div
                key={icon.name}
                className="w-full aspect-square rounded-xl overflow-hidden justify-self-start megaXXl:w-[70px]"
            >
              <Image
                  src={icon.src}
                  alt={icon.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
              />
            </div>
        ))}
      </div>

      <div className="pr-[20px] xl:pr-[30px] megaXXl:pr-[80px] self-end xl:absolute xl:right-0 xl:bottom-[36px]">
        <LanguageSwitcher />
      </div>
    </div>

  </section>



        <section className="pt-[60px] md:pt-[80px] xl:pt-[120px] z-20 sm:relative sm:pb-[120px] md:pb-[20px] lg:pb-[25px]">
          <div className="font-inter container xl:relative flex flex-col justify-between text-blackText">
            <div className="sm:mr-[20px]">
              <p className="font-medium lg:font-regular mb-[24px] xl:max-w-[930px] md:max-w-[541px] lg:max-w-[682px] text-[24px]/[29.05px] md:text-[30px]/[36.31px] xl:mb-[26px] xl:text-[40px]/[48.41px]">
                {t.home.description}
              </p>
              <span className="font-medium mt-[5px] miniSm:max-w-[300px] sm:max-w-[210px] md:max-w-full hidden sm:text-[17px]/[20.57px] text-[18px] sm:flex">
                {t.home.passionate}
              </span>
            </div>

            <div className="flex flex-col xs:flex-row sm:absolute xl:absolute xl:left-0 xl:bottom-0 xl:top-0 xl:w-full xl:h-full sm:bottom-0 sm:right-[20px] md:top-[80px]">
              <span className="font-medium mb-[30px] max-w-[300px] text-[17px]/[20.57px] xs:max-w-[190px] sm:hidden">
                {t.home.passionate}
              </span>
              <Magnetic>
                <Link
                  className="ml-auto flex h-[180px] w-[180px] min-w-[180px] cursor-pofont-inter items-center justify-center rounded-full bg-blue text-lg text-white transition hover:bg-blueHover magnetic"
                  href="/about"
                >
                  {t.home.aboutMe}
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>
        <section className="hidden xl:block">
          <div className="container overflow-hidden pt-[60px] sm:pt-[80px] lg:pt-[50px] xl:pt-[48px]">
            <div className="border-b border-b-grayBorder font-medium text-blackText overflow-hidden pt-[120px] relative">
              <div className="font-inter text-[18px] font-regular text-[#A5A5A5] absolute top-[50px]">
                {t.home.recentWork}
              </div>
              <Link
                href="/work/mckduck"
                target="_blank"
                className="group flex cursor-pofont-inter items-center justify-between border-t border-t-grayBorder transition-all h-[167px] hover:h-[195px] after:h-[80px] after:w-1/2 after:bottom-0 after:left-0 after:z-10 after:bg-white after:absolute relative z-[1] bg-white"
              >
                <div className="flex w-[320px] absolute bottom-0 translate-y-full group-hover:translate-y-0 left-1/2 transition-all duration-300">
                  <div
                    className={
                      "relative w-full px-[20px] pb-[100%] bg-[#D8DEE4]"
                    }
                  >
                    <Image
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all w-[calc(100%-30px)]"
                      src={ImgWork1}
                      quality={95}
                      alt=""
                      sizes="50vw"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="text-[40px] uppercase">
                  {t.home.works.dental.title}
                </div>
                <div className="font-inter text-lg">
                  {t.home.works.dental.descr}
                </div>
              </Link>
              <Link
                href="/work/web-banners"
                target="_blank"
                className="group flex cursor-pofont-inter items-center justify-between border-t border-t-grayBorder transition-all h-[167px] hover:h-[195px] after:h-[80px] after:w-1/2 after:bottom-0 after:left-0 after:z-10 after:bg-white after:absolute relative z-[2] bg-white"
              >
                <div className="flex w-[320px] absolute bottom-0 translate-y-full group-hover:translate-y-0 left-1/2 transition-all duration-300">
                  <div
                    className={
                      "relative w-full px-[20px] pb-[100%] bg-[#26292E]"
                    }
                  >
                    <Image
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all w-[calc(100%-30px)]"
                      src={ImgWork2}
                      quality={95}
                      alt=""
                      sizes="50vw"
                      unoptimized
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="text-[40px] uppercase">
                  {t.home.works.banners.title}
                </div>
                <div className="font-inter text-lg">
                  {t.home.works.banners.descr}
                </div>
              </Link>
              <Link
                href="/work/medical-dashboard"
                target="_blank"
                className="group flex cursor-pofont-inter items-center justify-between border-t border-t-grayBorder transition-all h-[167px] hover:h-[195px] after:h-[80px] after:w-1/2 after:bottom-0 after:left-0 after:z-10 after:bg-white after:absolute relative z-[3] bg-white"
              >
                <div className="flex w-[320px] absolute bottom-0 translate-y-full group-hover:translate-y-0 left-1/2 transition-all duration-300">
                  <div
                    className={
                      "relative w-full px-[20px] pb-[100%] bg-[#F0F1EC]"
                    }
                  >
                    <Image
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all w-[calc(100%-30px)]"
                      src={ImgWork3}
                      quality={95}
                      alt=""
                      sizes="50vw"
                      loading="lazy"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="text-[40px] uppercase">
                  {t.home.works.medical.title}
                </div>
                <div className="font-inter text-lg">
                  {t.home.works.medical.descr}
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="block xl:hidden mt-[60px] md:mt-[80px]">
          <div className="container">
            <div className="font-inter mb-[40px] text-[18px] font-regular text-[#A5A5A5] lg:mb-[30px] hidden md:flex">
              {t.home.recentWork}
            </div>
            <div className="grid grid-cols-1 gap-y-[60px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[80px] lg:gap-y-[120px]">
              {works.map((w, i) => (
                <WorkItem {...w} key={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="z-20 pt-[50px] md:pt-[60px] pb-[60px] md:pb-[80px] xl:pb-[120px]">
          <div>
            <Magnetic>
              <Link
                href="/work"
                className="font-inter font-medium mx-auto mb-[120px] sm:mb-[0px] miniSm:mb-[0px] md:mb-[80px] xl:mb-[120px] flex h-[180px] w-[180px] items-center justify-center rounded-full border border-grayBorder bg-white text-lg text-blackText hover:bg-blueHover hover:border-blueHover transition-all hover:text-white"
              >
                {t.home.moreWork}
              </Link>
            </Magnetic>

            <div
              className="relative hidden flex-col gap-5 pb-[calc(36%+20px)] md:flex"
              id="scroll-slider"
            >
              <div
                className="absolute right-0 top-0 flex w-[120%] gap-5"
                id="scroll-slider-item-1"
              >
                <div className="flex w-1/4 bg-[#D8DEE4] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img1}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#041C3C] pt-[15%] relative">
                  <Image
                      className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                      src={Img6}
                      sizes="30vw"
                      quality={95}
                      alt=""
                      loading="lazy"
                      unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#F1F6FF] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img5}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#2B4E8A] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img2Vid}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 flex w-[120%] gap-5"
                id="scroll-slider-item-2"
              >
                <div className="flex w-1/4 bg-[#232222] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img2}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#F3F4F5] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img3}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
                <div className="flex w-1/4 bg-[#E7E8EA] pt-[15%] relative">
                  <AutoplayVideo
                    className="flex w-full h-full absolute top-0 left-0  px-[20px] py-[25px] xl:py-[35px]"
                    path="/img/slider/vid2.mp4"
                  />
                </div>
                <div className="flex w-1/4 bg-[#CED4D6] pt-[15%] relative">
                  <Image
                    className="flex w-full h-full absolute top-0 left-0 px-[20px] py-[25px] xl:py-[35px] "
                    src={Img7}
                    sizes="30vw"
                    quality={95}
                    alt=""
                    loading="lazy"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <SlideOnScroll />
    </>
  );
}
