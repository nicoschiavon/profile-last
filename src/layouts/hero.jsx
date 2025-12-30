import React from "react";
import photo from "../assets/photo.jpg";

export default function Hero() {
  return (
    <section className="mt-16 md:mt-24 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-50 dark:opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="flex flex-col-reverse gap-8 px-4 py-10 md:flex-row md:items-center relative z-10">
        <div className="flex flex-col gap-6 text-center md:text-left md:min-w-[400px] flex-1">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
              Nico Schiavon Dev
            </h1>
            <h2 className="text-base font-normal leading-normal text-gray-600 dark:text-gray-400 sm:text-lg">
              Full-Stack Engineer & Creative Coder
            </h2>
          </div>
          <div className="flex-wrap gap-3 flex justify-center md:justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
              <span className="truncate">View Projects</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gray-200 text-gray-800 dark:bg-[#233648] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-[#2f455c] transition-colors">
              <span className="truncate">Get In Touch</span>
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center md:w-1/3">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur opacity-75 dark:opacity-50"></div>
            <div
              className="relative w-full h-full bg-center bg-no-repeat bg-cover rounded-full border-4 border-white dark:border-[#233648]"
              data-alt="A portrait of Nico Schiavon, a developer smiling."
              style={{
                backgroundImage: `url(${photo})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
