import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

type WorkItemProps = {
    cardKey: string;
    date: string;
    href: string;
    img: string;
    bg: string;
};

export function WorkItem({ cardKey, date, href, img, bg }: WorkItemProps) {
    const { t } = useLanguage();

    const cardData = (t.work.workCards as any)[cardKey];
    const title = cardData?.title || cardKey;
    const description = cardData?.description || "";

    return (
        <Link target="_blank" href={href} className="flex flex-col">
            <div
                className={
                    "group relative mb-[20px] w-full px-[20px] pb-[100%]" + " " + bg
                }
            >
                <Image
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all w-[calc(100%-30px)] scale-95 group-hover:scale-100"
                    src={img}
                    quality={95}
                    width={560}
                    height={330}
                    alt=""
                    sizes="50vw"
                />
            </div>

            <div className="mb-[12px] h-auto text-[24px] font-medium uppercase leading-[130%] text-[#404040] md:text-[40px]">
                {title}
            </div>
            <hr className="mt-auto text-[#C3C6CC]" />
            <div className="font-inter mt-[16px] flex items-center justify-between text-[17px] font-medium leading-[120%] text-[#404040] md:text-[18px]">
                <div>{description}</div>
                <div>{date}</div>
            </div>
        </Link>
    );
}