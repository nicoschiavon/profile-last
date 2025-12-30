import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-b-[#233648] px-4 md:px-10 py-3 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4 text-gray-900 dark:text-white">
        <div className="size-5 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_6_330)">
              <path
                clipRule="evenodd"
                d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_330">
                <rect fill="white" height="48" width="48"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          Nico Schiavon
        </h2>
      </div>
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a
              className="text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href="#"
            >
              {t.header.home}
            </a>
            <a
              className="text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href="#about"
            >
              {t.header.about}
            </a>
            <a
              className="text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href="#projects"
            >
              {t.header.projects}
            </a>
            <a
              className="text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href="#contact"
            >
              {t.header.contact}
            </a>
          </div>
        </nav>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-[#233648] hover:bg-gray-200 dark:hover:bg-[#2f455c] transition-colors"
        >
          <span
            className={`text-xs font-bold ${
              language === "en" ? "text-primary" : "text-gray-500"
            }`}
          >
            EN
          </span>
          <div className="w-[1px] h-3 bg-gray-300 dark:bg-gray-600"></div>
          <span
            className={`text-xs font-bold ${
              language === "es" ? "text-primary" : "text-gray-500"
            }`}
          >
            ES
          </span>
        </button>
        <button className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
