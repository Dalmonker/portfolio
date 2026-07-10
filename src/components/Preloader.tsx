"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGPathElement>(null);
  const pathname = usePathname();

  useEffect(() => {

    if (pathname !== "/") {
      if (preloaderRef.current) {
        preloaderRef.current.style.display = "none";
      }
      return;
    }

    document.body.style.overflowY = "hidden";

    const svgpic = svgRef.current;
    if (!svgpic) return;

    const tl2 = gsap.timeline({
      onComplete: () => {
        document.body.style.overflowY = "visible";
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
      },
    });

    const curve2 = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat2 = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl2.from(".preloader-heading h1", {
      delay: 0.5,
      y: 1000,
      skewY: 20,
      ease: "power2.out",
    }).to(".preloader-heading h1", {
      delay: 0.5,
      y: -1000,
      skewY: 20,
      ease: "power2.in",
    });

    tl2.to(svgpic, {
      duration: 0.8,
      attr: { d: curve2 },
      ease: "power2.easeIn",
    }).to(svgpic, {
      duration: 0.8,
      attr: { d: flat2 },
      ease: "power2.easeOut",
    });

    tl2.to(".preloader-wrap", {
      y: -1500,
      ease: "power2.inOut",
    });

    tl2.from(
      "main",
      {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=1.5"
    );

    tl2.from(
      "footer",
      {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.8"
    );

    return () => {
      tl2.kill();
      document.body.style.overflowY = "visible";
    };
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <div
      ref={preloaderRef}
      className="preloader-wrap fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      <svg
        className="absolute top-0 w-screen h-[110vh]"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          ref={svgRef}
          d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
          fill="#26292E"
        />
      </svg>

      <div className="preloader-heading relative z-[10001]">
        <h1 className="text-[120px] text-white font-bold uppercase whitespace-nowrap">
          Hello!
        </h1>
      </div>
    </div>
  );
}