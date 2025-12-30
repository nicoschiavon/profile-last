import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="px-4" id="about">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="flex-1">
          <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
            {t.about.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal pb-3">
            {t.about.bio1}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
            {t.about.bio2}
          </p>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4">
            {t.about.findMe}
          </h3>
          <div className="gap-4 flex flex-wrap justify-start">
            <a
              target="_blank"
              className="flex flex-col items-center gap-2 text-center w-20 group"
              href="https://github.com/nicoschiavon"
            >
              <div className="rounded-full bg-gray-200 dark:bg-[#233648] p-3 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-gray-700 dark:text-white text-2xl group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  code
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">
                GitHub
              </p>
            </a>
            <a
              target="_blank"
              className="flex flex-col items-center gap-2 text-center w-20 group"
              href="https://www.linkedin.com/in/nicoschiavon/"
            >
              <div className="rounded-full bg-gray-200 dark:bg-[#233648] p-3 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-gray-700 dark:text-white text-2xl group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  business_center
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">
                LinkedIn
              </p>
            </a>
            <a
              target="_blank"
              className="flex flex-col items-center gap-2 text-center w-20 group"
              href="https://www.instagram.com/nicoschiavon/"
            >
              <div className="rounded-full bg-gray-200 dark:bg-[#233648] p-3 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors">
                <span className="material-symbols-outlined text-gray-700 dark:text-white text-2xl group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  photo_camera
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-medium leading-normal">
                Instagram
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
