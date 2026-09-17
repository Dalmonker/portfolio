"use client";

import { useLanguage } from "@/context/LanguageContext";
import DrumButton from "@/components/ui/DrumButton";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const baseClass =
        "transition font-inter text-[17px] font-medium xl:text-blackText";

    return (
        <div className="flex gap-2 text-white xl:text-blackText font-inter text-[17px] font-medium">
            <DrumButton
                onClick={() => setLanguage("en")}
                disableAnimation={language === "en"}
                className={`${baseClass} ${
                    language === "en"
                        ? "text-blue-600"
                        : "opacity-50 hover:text-blueHover hover:opacity-100"
                }`}
            >
                EN
            </DrumButton>

            <span className="opacity-30">/</span>

            <DrumButton
                onClick={() => setLanguage("ru")}
                disableAnimation={language === "ru"}
                className={`${baseClass} ${
                    language === "ru"
                        ? "text-blue-600"
                        : "opacity-50 hover:text-blueHover hover:opacity-100"
                }`}
            >
                RU
            </DrumButton>
        </div>
    );
}