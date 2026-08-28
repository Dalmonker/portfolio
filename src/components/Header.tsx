"use client";
import { Svg } from "@/components/Svg";
import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Magnetic from "./logics/Magnetic";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  isWhite?: boolean;
};

export function Header({ isWhite = false }: Props) {
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

  const btnStyles = isWhite
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
          isWhite ? "text-white" : "text-blackText"
        )}
      >
        <Link
          href="/"
          className="animate__animated animate__fadeIn font-inter pl-[20px] lg:pl-[80px] hover:text-[#362EEC] transition-all"
        >
          {t.header.copyright}
        </Link>

        <div className="pr-[20px] lg:pr-[80px]">
          <button className="flex md:hidden" onClick={() => setOpen(true)}>
            <div
              className={clsx(
                "menu-wrapper w-[60px] h-[60px]",
                !isWhite && "white-lines"
              )}
            >
              <div className={clsx("hamburger-menu")}></div>
            </div>
          </button>
          <Magnetic>
            <div
              className={clsx(
                "flex fixed top-[20px] right-[20px] z-[1000]",
                !showBurger && !isOpen && "hidden"
              )}
            >
              <button
                className={clsx(
                  "magnetic flex items-center justify-center w-[60px] h-[60px] border border-[#656565] bg-[#26292E] rounded-full transition-all",
                  isOpen ? "bg-[#3E4EFF] border-[#3E4EFF] border-0" : btnStyles
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
              isWhite ? "text-white" : "text-blackText"
            )}
          >
            <Link
              className={clsx("hover:text-[#362EEC]", {
                "text-[#2E4EEC]": pathname.includes("/work"),
              })}
              href="/work"
            >
              {t.header.work}
            </Link>
            <Link
              className={clsx("hover:text-[#362EEC]", {
                "text-[#2E4EEC]": pathname.includes("/about"),
              })}
              href="/about"
            >
              {t.header.about}
            </Link>
            <Link
              className="hover:text-[#362EEC]"
              href="#contact"
              onClick={onContact}
            >
              {t.header.contact}
            </Link>

            <Link
              className="telegram-link flex items-center gap-2"
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
            "fixed transition duration-700 bg-[#26292E] h-[360px] z-[100] border-b border-[#656565] w-full pt-[80px] pb-[30px] px-[20px] left-0 top-0 megaXl:p-[40px] megaXl:pr-[160px] lg:h-auto",
            isOpen ? "-translate-y-0" : "-translate-y-full",
            !showBurger && !isOpen && "hidden"
          )}
                  >
          <div className="text-[#A5A5A5] text-[17px] font-medium font-inter  megaXl:text-[18px]">
            {t.header.navigation}
          </div>
          <hr className="border-none my-[24px] h-[1px] w-full bg-[#656565] megaXl:mt-[30px] md:mb-[20px]" />
          <div className="flex-col flex-wrap lg:justify-between lg:flex-row flex lg:items-center">
            <div className="lg:flex lg:items-center">
              <div className="flex items-center justify-between text-white uppercase text-[24px] lg:text-[40px] mb-[20px] font-medium md:mb-0">
                <Link
                  className={clsx(
                    " hover:text-[#3E4EFF] transition-all md:mb-[20px] lg:mb-[0px] lg:mr-[30px]",
                    pathname === "/" && "text-[#2E4EEC]"
                  )}
                  href="/"
                  onClick={() => setOpen(false)}
                >
                  {t.header.home}
                </Link>
                <Link
                  className={clsx(
                    " hover:text-[#3E4EFF] transition-all lg:mr-[30px]",
                    pathname.includes("work") && "text-[#2E4EEC]"
                  )}
                  href="/work"
                  onClick={() => setOpen(false)}
                >
                  {t.header.work}
                </Link>
              </div>
              <div className="flex items-center justify-between text-white uppercase text-[24px] lg:text-[40px]  font-medium  megaXl:mb-0">
                <Link
                  className={clsx(
                    " hover:text-[#3E4EFF] transition-all md:mb-[20px] lg:mb-[0px] lg:mr-[30px]",
                    pathname === "/about" && "text-[#2E4EEC]"
                  )}
                  href="/about"
                  onClick={() => setOpen(false)}
                >
                  {t.header.about}
                </Link>
                <Link
                  className=" hover:text-[#3E4EFF] transition-all"
                  href="/#contact"
                  onClick={() => setOpen(false)}
                >
                  {t.header.contact}
                </Link>
              </div>
                <div className="flex items-center justify-center lg:ml-[30px]">
                  <Link
                      className="telegram-link flex items-center gap-2 justify-center transition-all hover:text-[#362EEC]"
                      href="https://t.me/alinagavrilovich"
                      target="_blank"
                  >
              <span className="flex items-center justify-center w-[44px] h-[44px] transition-all hover:opacity-70 hover:scale-110">
                <Svg
                    className="telegram-icon w-full h-full md:mb-[24px] lg:mb-[0px]"
                    width={44}
                    height={44}
                    iconId="icon-header-telegram-white"
                />
              </span>
                  </Link>
                </div>
            </div>

            <a
              className="flex justify-center text-white font-inter hover:text-[#362EEC] transition-all text-[30px]"
              href="mailto:gavrilovich.ali@gmail.com"
            >
              gavrilovich.ali@gmail.com
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
