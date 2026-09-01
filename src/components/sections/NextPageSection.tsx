"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "../logics/Magnetic";
import { useLanguage } from "@/context/LanguageContext";

export function NextPageSection({
                                    image,
                                    href,
                                    bgColor,
                                    projectKey,
                                }: {
    image: StaticImport;
    href: string;
    bgColor: string;
    projectKey: string;
}) {
    const { t } = useLanguage();

    // Получаем данные проекта из nextPage.projects
    const projectData = (t.nextPage?.projects as any)?.[projectKey];
    const title = projectData?.title || projectKey;

    return (
        <div className="flex flex-col items-center justify-center bg-[#26292E] pt-[60px] pb-[60px] md:pb-[80px] xl:pb-[100px] md:pt-[80px] xl:pt-[120px]">
            <div className="container flex flex-col items-center">
        <span className="font-inter font-medium leading-[120%] text-white sm:text-[18px]">
          {t.nextPage?.title || "Next work"}
        </span>

                <span className="mb-[36px] mt-[12px] md:mt-[20px] md:mb-[34px] lg:mt-[45px] lg:mb-[45px] xl:mt-[30px] xl:mb-[40px] text-[24px] text-center font-medium uppercase leading-[130%] text-white sm:text-[40px] lg:text-[64px]">
          {title}
        </span>
                <div className="flex w-full justify-center border-b border-b-[#656565]">
                    <Link
                        href={href}
                        target="_blank"
                        className=" flex md:w-[458px]sm:pb-0 relative w-full overflow-hidden pb-[50%] sm:h-[calc(180px)] sm:w-[358px] sm:pb-0 md:h-[200px] md:w-[458px] lg:h-[200px] lg:w-[600px] group"
                        style={{ backgroundColor: bgColor }}
                    >
                        <Image
                            className="absolute -bottom-[50%] left-[20px] w-[calc(100%-40px)] lg:-bottom-[125%] group-hover:-bottom-[25%] lg:group-hover:-bottom-[100%] transition-all"
                            src={image}
                            sizes="50vw"
                            quality={95}
                            alt=""
                        />
                    </Link>
                </div>
                <Magnetic>
                    <Link
                        className="mt-[60px] flex h-[180px] w-[180px] min-w-[180px] cursor-pofont-inter items-center justify-center rounded-full bg-blue text-lg text-white transition hover:bg-blueHover"
                        href="/work"
                    >
                        {t.nextPage?.button || "All work"}
                    </Link>
                </Magnetic>
            </div>
        </div>
    );
}