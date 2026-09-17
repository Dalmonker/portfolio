"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

type DrumButtonProps = {
    children: ReactNode;
    className?: string;
    duration?: number;
    /** Отключить анимацию «барабана» (например, для активного состояния) */
    disableAnimation?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className">;

export default function DrumButton({
                                       children,
                                       className = "",
                                       duration = 500,
                                       disableAnimation = false,
                                       type = "button",
                                       ...rest
                                   }: DrumButtonProps) {
    const style = {
        "--drum-duration": `${duration}ms`,
    } as React.CSSProperties;

    // Если анимация выключена — рендерим просто текст, без обёртки-барабана
    if (disableAnimation) {
        return (
            <button type={type} className={className} {...rest}>
                {children}
            </button>
        );
    }

    return (
        <button
            type={type}
            className={`drum-link ${className}`}
            style={style}
            {...rest}
        >
      <span className="drum-link__wrapper">
        <span className="drum-link__item">{children}</span>
        <span className="drum-link__item" aria-hidden="true">
          {children}
        </span>
      </span>
        </button>
    );
}