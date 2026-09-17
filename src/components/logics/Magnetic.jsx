"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Magnetic({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const config = {
      duration: 1,             // ← скорость движения за курсором
      ease: "power3.out",      // ← плавно, без пружины
    };

    const xTo = gsap.quickTo(magnetic.current, "x", config);
    const yTo = gsap.quickTo(magnetic.current, "y", config);

    const mouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
          magnetic.current.getBoundingClientRect();

      xTo(clientX - (left + width / 2));
      yTo(clientY - (top + height / 2));
    };

    const mouseLeave = () => {
      gsap.to(magnetic.current, { x: 0, y: 0, duration: 1, ease: "power3.out" });
    };

    const el = magnetic.current;
    el.addEventListener("mousemove", mouseMove);
    el.addEventListener("mouseleave", mouseLeave);

    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}