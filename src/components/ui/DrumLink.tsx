"use client";

import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type DrumLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
    /** Длительность анимации в мс */
    duration?: number;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export default function DrumLink({
                                     href,
                                     children,
                                     className = "",
                                     duration = 500,
                                     target,
                                     rel,
                                     onClick,
                                     ...rest
                                 }: DrumLinkProps) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    const isBlank = target === "_blank";
    const style = {
        "--drum-duration": `${duration}ms`,
    } as React.CSSProperties;

    const content = (
        <span className="drum-link__wrapper">
      <span className="drum-link__item">{children}</span>
      <span className="drum-link__item" aria-hidden="true">
        {children}
      </span>
    </span>
    );

    // Внешние ссылки / target="_blank" — обычный <a>
    if (isExternal || isBlank) {
        return (
            <a
                href={href}
                target={target ?? (isExternal ? "_blank" : undefined)}
                rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
                className={`drum-link ${className}`}
                style={style}
                onClick={onClick}
                {...rest}
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={`drum-link ${className}`}
            style={style}
            onClick={onClick}
            {...rest}
        >
            {content}
        </Link>
    );
}