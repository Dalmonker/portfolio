"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Svg } from "@/components/Svg";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/sections/ContactSection";
// import Link from "next/link";
// import Image from "next/image";

import { WorkItem } from "@/components/WorkItem";

export type WorkType = {
  title: string;
  descr: string;
  date: string;
  href: string;
  img: string;
  bg: string;
};

const works: WorkType[] = [
  {
    title: "Code Storage Services",
    descr: "Design",
    date: "2025",
    href: "https://snipit.ru",
    img: "/img/work/code-storage/preview.webp",
    bg: "bg-[#DFE2E8]",
  },
  {
    title: "Project Roadmap",
    descr: "Design",
    date: "2025",
    href: "https://kwork.ru/portfolio/15773530",
    img: "/img/work/project-roadmap/preview.webp",
    bg: "bg-[#21415C]",
  },
  {
    title: "Marketing Education",
    descr: "Design",
    date: "2025",
    href: "/work/marketing-education",
    img: "/img/work/marketing-education/preview.webp",
    bg: "bg-[#010221]",
  },
  {
    title: "Dental clinic Ortodent",
    descr: "Design & Development",
    date: "2024",
    href: "/work/dental-clinic",
    img: "/img/work/dental-clinic/preview.webp",
    bg: "bg-[#D8DEE4]",
  },
  {
    title: "tennis club",
    descr: "Design & Development",
    date: "2024",
    href: "/work/tennis",
    img: "/img/work/tennis/preview.webp",
    bg: "bg-[#213D5C]",
  },
  {
    title: "Medical Dashboard",
    descr: "Design",
    date: "2024",
    href: "/work/medical-dashboard",
    img: "/img/work/medical-dashboard/preview.webp",
    bg: "bg-[#F0F1EC]",
  },
  {
    title: "vinyl record store",
    descr: "Design",
    date: "2024",
    href: "/work/vinyl",
    img: "/img/work/vinyl/preview.webp",
    bg: "bg-[#EFE9D8]",
  },

  {
    title: "Photographer portfolio",
    descr: "Design & Development",
    date: "2023",
    href: "/work/photographer",
    img: "/img/work/photographer/preview.webp",
    bg: "bg-[#D9E4E3]",
  },
  {
    title: "Web Banners collection",
    descr: "Design",
    date: "2023-2024",
    href: "/work/web-banners",
    img: "/img/work/web-banners/preview.webp",
    bg: "bg-[#000000]",
  },
  {
    title: "404 page collection",
    descr: "Design",
    date: "2023-2024",
    href: "/work/404",
    img: "/img/work/404/preview.webp",
    bg: "bg-[#ECECEC]",
  },
];

export default function Work() {
  const { t } = useLanguage();
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <section className="container pb-[40px] pt-[106px] md:pt-[116px] lg:pt-[130px] sm:pb-[35px] md:pb-[63px] lg:pb-[57px] xl:pb-[25px]">
          <h1 className="relative text-[44px] font-bold uppercase leading-[120%] text-[#404040] sm:text-[52px] lg:text-[90px]/[100px] md:text-[90px]/[110px] xl:text-[150px]">
            <div className="lg:text-[90px]/[86px] xl:text-[150px]/[180px]">{t.work.titleOne}</div>
            <div className="flex sm:text-[52px] md:text-[90px] lg:text-[90px]/[125px] xl:text-[150px]/[160px]">
              {t.work.titleSecond}

              <Svg
                className="mt-[10px] right-0 lg:right-0 md:right-[20px] absolute hidden +rotate-90 text-blue sm:mt-[12px] sm:flex md:mt-[12px] lg:mt-[24px] xl:mt-[28px]"
                size={30}
                iconId="icon-arrow-work"
              />

            </div>
          </h1>
          <div className="flex flex-col xl:pb-[10px] xl:mt-[-2px] justify-between lg:flex-row lg:items-center">
            <p className="font-inter mt-[10px] md:mt-[7px] lg:mt-[0px] xl:mt-[23px] text-[17px]/[20.57px] md:text-[18px]/[21.78px] font-medium leading-[121%] text-[#404040] sm:mt-[16px] sm:text-[17px] md:text-[18px] lg:max-w-[327px]">
            {t.work.descriptionOne}
            </p>
            <span className="mt-[3px] sm:mt-[3px] flex justify-end text-[44px] sm:text-[52px] md:text-[90px]/[99px] lg:text-[90px]/[84px] xl:text-[150px]/[165px] font-bold uppercase text-blue">
              {t.work.descriptionSecond}
            </span>
          </div>
        </section>
        <section className="container xl:pt-[70px] lg:pt-[20px] md:pt-[10px] grid grid-cols-1 gap-y-[60px] pb-[60px] md:grid-cols-2 md:gap-x-[20px] md:gap-y-[80px] md:pb-[80px] lg:gap-y-[120px] lg:pb-[120px]">
          {works.map((w, i) => (
            <WorkItem {...w} key={i} />
          ))}
        </section>
      </main>
      <ContactSection />
      <Footer />
    </>
  );
}
