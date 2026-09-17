"use client";
import { Svg } from "@/components/Svg";
import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Magnetic from "./logics/Magnetic";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";
import DrumLink from "@/components/ui/DrumLink";


type Props = {
  isWhite?: boolean;
  iconColor?: string;
};

export function Header({
  isWhite = false,
  iconColor = "text-blackText",
}: Props) {
  const [isOpen, setOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const onContact = (e: any) => {
    e.preventDefault();
    if (!document.querySelector("#contact")) {
      window.location.href = "/#contact";
    }
    (document.querySelector("#contact") as HTMLElement).scrollIntoView({
      behavior: "smooth",
    });
  };

  const btnStyles = isWhite;
  // ? "bg-white text-[#404040] white-lines"
  // : "bg-[#26292E] text-white";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Порог, после которого бургер-меню будет показано
        setShowBurger(true);
      } else {
        setShowBurger(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="absolute left-0 top-0 z-50 w-full">
      <header
        className={clsx(
          "flex items-center justify-between pt-10 text-[17px] font-medium  sm:text-[18px]",
          isWhite ? "text-white" : "text-blackText",
        )}
      >
        <DrumLink
          href="/"
          className="animate__animated animate__fadeIn font-inter pl-[20px] xl:pl-[30px] megaXXl:ml-[80px] transition-all"
        >
          {t.header.copyright}
        </DrumLink>

        <div className="pr-[20px] xl:pr-[30px] megaXXl:pr-[80px]">
          <button className="flex md:hidden" onClick={() => setOpen(true)}>
            <div
              className={clsx(
                "menu-wrapper w-[60px] h-[60px] md:w-[80px] md:h-[80px]",
                !isWhite && "white-lines",
              )}
            >
              <div className={clsx("hamburger-menu")}></div>
            </div>
          </button>
          <Magnetic>
            <div
              className={clsx(
                "flex fixed top-[20px] right-[20px] z-[1000]",
                !showBurger && !isOpen && "hidden",
              )}
            >
              <button
                className={clsx(
                  "magnetic flex items-center justify-center w-[60px] h-[60px] md:w-[80px] md:h-[80px] border border-[#656565] bg-[#26292E] rounded-full transition-all",
                  isOpen ? "bg-[#3E4EFF] border-[#3E4EFF] border-0" : btnStyles,
                )}
                onClick={() => setOpen(!isOpen)}
              >
                <div className="menu-wrapper w-[60px] h-[60px]">
                  <div
                    className={clsx("hamburger-menu", isOpen && "active")}
                  ></div>
                </div>
              </button>
            </div>
          </Magnetic>

          <nav
            className={clsx(
              "animate__animated animate__fadeIn hidden items-center gap-11 md:flex font-inter",
              isWhite ? "text-white" : "text-blackText",
            )}
          >
            <DrumLink
              className={clsx("", {
                "": pathname.includes("/work"),
              })}
              href="/work"
            >
              {t.header.work}
            </DrumLink>
            <DrumLink
              className={clsx("", {
                "": pathname.includes("/about"),
              })}
              href="/about"
            >
              {t.header.about}
            </DrumLink>
            <DrumLink
              className=""
              href="#contact"
              onClick={onContact}
            >
              {t.header.contact}
            </DrumLink>

            <DrumLink
              href="https://drive.google.com/file/d/1CmPxiOk_-083OUMzVWVyc4dXB7aqunH4/view"
              target="_blank"
              className="font-inter animate__animated animate__fadeIn  transition-all flex items-center gap-1"
            >
              <span>CV</span>
            </DrumLink>

            <Link
              className={clsx(
                "telegram-link flex items-center transition-colors hover:text-[#362EEC]",
                iconColor,
              )}
              href="https://t.me/alinagavrilovich"
              target="_blank"
            >
              <span className="flex items-center justify-center w-[22px] h-[18.38px]">
                <Svg
                  className="telegram-icon w-full h-full"
                  width={22}
                  height={18.38}
                  iconId="icon-header-telegram"
                />
              </span>
            </Link>
          </nav>
        </div>
        <div
          className={clsx(
            "fixed transition duration-700 bg-[#26292E] z-[100] border-b border-[#656565] w-full pt-[80px] pb-[30px] px-[20px] left-0 top-0 megaXl:p-[40px] megaXl:pr-[160px] lg:h-auto",
            isOpen ? "translate-y-0" : "-translate-y-[120%]",
          )}
        >
          <div className="text-[#A5A5A5] text-[17px] font-medium font-inter  megaXl:text-[18px]">
            {t.header.navigation}
          </div>
          <hr className="border-none my-[24px] h-[1px] w-full bg-[#656565] megaXl:mt-[30px] md:mb-[20px]" />
          <div className="flex-col flex-wrap lg:justify-between lg:flex-row flex lg:items-center">
            <div className="lg:flex lg:items-center">
              <div className="flex items-center justify-between text-white uppercase text-[24px] lg:text-[40px] mb-[20px] font-medium lg:mb-0">
                <DrumLink
                  className={clsx(
                    "transition-all lg:mr-[30px]",
                    pathname === "/" && "",
                  )}
                  href="/"
                  onClick={() => setOpen(false)}
                >
                  {t.header.home}
                </DrumLink>
                <DrumLink
                  className={clsx(
                    " transition-all lg:mr-[30px]",
                    pathname.includes("work") && "",
                  )}
                  href="/work"
                  onClick={() => setOpen(false)}
                >
                  {t.header.work}
                </DrumLink>
              </div>
              <div className="flex items-center justify-between text-white uppercase mb-[20px] text-[24px] lg:text-[40px]  font-medium  lg:mb-0">
                <DrumLink
                  className={clsx(
                    "transition-all lg:mr-[30px]",
                    pathname === "/about" && "",
                  )}
                  href="/about"
                  onClick={() => setOpen(false)}
                >
                  {t.header.about}
                </DrumLink>
                <DrumLink
                  className="transition-all"
                  href="/#contact"
                  onClick={() => setOpen(false)}
                >
                  {t.header.contact}
                </DrumLink>
              </div>
              <div className="flex items-center justify-between text-white uppercase text-[24px] lg:text-[40px] lg:ml-[30px] font-medium  mb-[24px] lg:mb-0">
                <DrumLink
                  href="https://drive.google.com/file/d/1CmPxiOk_-083OUMzVWVyc4dXB7aqunH4/view"
                  target="_blank"
                  className="transition-all"
                >
                  <span>CV</span>
                </DrumLink>

                <Link
                  className="lg:ml-[30px] telegram-link flex items-center justify-center transition-all hover:text-[#362EEC]"
                  href="https://t.me/alinagavrilovich"
                  target="_blank"
                >
                  <span className="flex items-center justify-center transition-all hover:opacity-70 hover:scale-110">
                    <Svg
                      className="telegram-icon w-[32px] h-[32px] lg:w-[44px] lg:h-[44px]"
                      iconId="icon-header-telegram-white"
                    />
                  </span>
                </Link>
              </div>
            </div>

            <DrumLink
              className="flex justify-center text-white font-inter transition-all text-[26px] md:text-[30px]"
              href="mailto:gavrilovich.ali@gmail.com"
            >
              gavrilovich.ali@gmail.com
            </DrumLink>
          </div>
        </div>
      </header>
    </div>
  );
}
