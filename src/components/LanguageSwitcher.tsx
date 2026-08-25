'use client';

import { useLanguage } from '@/context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 font-inter text-[17px] font-medium text-blackText">
      <button
        onClick={() => setLanguage('en')}
        className={`transition ${
          language === 'en' 
            ? 'text-blue-600' 
            : 'opacity-50 hover:text-blueHover hover:opacity-100'
        }`}
      >
        EN
      </button>
      <span className="opacity-30">/</span>
      <button
        onClick={() => setLanguage('ru')}
        className={`transition ${
          language === 'ru' 
            ? 'text-blue-600' 
            : 'opacity-50 hover:text-blueHover hover:opacity-100'
        }`}
      >
        RU
      </button>
    </div>
  );
}