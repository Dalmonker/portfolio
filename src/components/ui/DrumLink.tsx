"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

type DrumLinkProps = {
    href: string;
    children: ReactNode;
    target?: string;
    rel?: string;
    className?: string;
    /** Длительность анимации в мс */
    duration?: number;
};

export default function DrumLink({
                                     href,
                                     children,
                                     target,
                                     rel,
                                     className = "",
                                     duration = 500,
                                 }: DrumLinkProps) {
    const [hovered, setHovered] = useState(false);

    // Проверяем, внешняя ли ссылка (http/https/mailto/tel)
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    const commonProps = {
        className: `drum-link ${className}`,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        style: {
            // CSS-переменная для длительности анимации
            ["--drum-duration" as any]: `${duration}ms`,
        },
    };

    const content = (
        <span className="drum-link__wrapper">
      <span className="drum-link__item">{children}</span>
      <span className="drum-link__item" aria-hidden="true">
        {children}
      </span>
    </span>
    );

    // Внешние ссылки — обычный <a> (или Link с target, но лучше <a>)
    if (isExternal || target === "_blank") {
        return (
            <a
                href={href}
                target={target ?? (isExternal ? "_blank" : undefined)}
                rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
                {...commonProps}
            >
                {content}
            </a>
        );
    }

    return (
        <Link href={href} {...commonProps}>
            {content}
        </Link>
    );
}