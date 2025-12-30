import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5">
        Proyectos Destacados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div className="flex flex-col bg-white dark:bg-[#15202b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover"
            data-alt="Abstract gradient of blue and purple for Project One's thumbnail"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNXIEEXxAHb7jgOFseyrI2Xl9aFJdloeiy76GktCcZlJMWE-0MU_Syhg3sB5v-Ee0rjjX3Aak4EEYSA8gNWJ-2wEtJvpwPhYu6VGP3tWkxpOOG3JeHtTs6Q2wppH_epDQdlpSun5NTQaVyeoFDr62Wmgr4ykt0cOT4G5TwP7Ja6Cko6mBnMiw-FVJH8MgTVT4uQd3r0ZoLlPZsC3QVVfsFmTMQ6OpSOpSn6cHP53L4OZHqZkWpWORFWPMOdgrxeVLuVU0MMJL8lwI")',
            }}
          ></div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Título del Proyecto Uno
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow">
              Un breve resumen de una frase sobre el propósito y las
              características clave del proyecto.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                React
              </span>
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                Node.js
              </span>
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                MongoDB
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-base">
                  visibility
                </span>
                Ver en Vivo
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-gray-200 text-gray-800 dark:bg-[#233648] dark:text-white text-sm font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-[#2f455c] transition-colors">
                <span className="material-symbols-outlined text-base">
                  code
                </span>
                Código
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white dark:bg-[#15202b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover"
            data-alt="Abstract gradient of teal and green for Project Two's thumbnail"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaVt6u7aiu2hM2Z-Y73WrlIQe_4QVowgNpePr3DyT9g6Gypa_B1Us-tQU1IoVOM6fOXBrvX6L8LtOUMxnx5P2upek7Z8D0nQkke8l-aezAqgRIM1ZdT9QMIbOs7Jcj5g1l3M2EOYiDZ52InvPfYPa71SGacU86OC3xpPz1Xt5376_m3Ntm5bTg0DRr_9mmQsJf3yzRiya5EvEtV8qj2EJJ8kDXv1dxHwEOHowNkz34PM4AqXcqgwEBgFeni38VbkdmrTgXKt8W9JQ")',
            }}
          ></div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Título del Proyecto Dos
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow">
              A brief, one-sentence summary of the project's purpose and key
              features.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                Vue.js
              </span>
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                Firebase
              </span>
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                TailwindCSS
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-base">
                  visibility
                </span>
                View Live
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-gray-200 text-gray-800 dark:bg-[#233648] dark:text-white text-sm font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-[#2f455c] transition-colors">
                <span className="material-symbols-outlined text-base">
                  code
                </span>
                Source
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white dark:bg-[#15202b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover"
            data-alt="Abstract gradient of orange and red for Project Three's thumbnail"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBbBWmkn_95VbuKiPqq9mpEd_q3qLbHRC24mK1O_XdZx9sDPLPPt0FZM_mryjSEhqP1pAT_ujA_pKyuLaNg-M4N2HSuNNdJEEmEnPVcOsxCSoy9q7mkmmTONlmZMB0UAVGdcUh4i7Tn8-2C1MDIMaUbjGoAEYYpn7Gmf7I8cxThnRGV887I6RUO9s5lrbO8d18iXsSZ5x7qjR-euID3ZCjpWhhppvrosYoHtFu-Ht3deY0JUKWOhY6IIFYbdhincPJrH47DnfcwelA")',
            }}
          ></div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Título del Proyecto Tres
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow">
              A brief, one-sentence summary of the project's purpose and key
              features.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                Python
              </span>
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                Django
              </span>
              <span className="text-xs font-semibold text-primary bg-primary/20 px-2 py-1 rounded-full">
                PostgreSQL
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-base">
                  visibility
                </span>
                View Live
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 h-10 px-4 bg-gray-200 text-gray-800 dark:bg-[#233648] dark:text-white text-sm font-bold rounded-lg hover:bg-gray-300 dark:hover:bg-[#2f455c] transition-colors">
                <span className="material-symbols-outlined text-base">
                  code
                </span>
                Source
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
