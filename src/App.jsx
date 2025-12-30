import { useState } from "react";
import photo from "./assets/photo.jpg";

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col font-sans text-gray-800 dark:text-gray-200 bg-background-light dark:bg-background-dark">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-5">
          <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col">
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
              <nav className="hidden md:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <a
                    className="text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                    href="#about"
                  >
                    About
                  </a>
                  <a
                    className="text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                    href="#projects"
                  >
                    Projects
                  </a>
                  <a
                    className="text-sm font-medium leading-normal text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                    href="#contact"
                  >
                    Contact
                  </a>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Resume</span>
                </button>
              </nav>
              <button className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </header>
            <main className="flex flex-col gap-16 md:gap-24">
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
              <section className="px-4" id="about">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="flex-1">
                    <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
                      About Me
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal pb-3">
                      ¡Hola! Soy Nico Schiavón, un desarrollador Full-Stack con experiencia en crear aplicaciones web modernas 
                      y responsivas con un enfoque en la experiencia del usuario y el rendimiento. 
                      Con un sólido conocimiento en tecnologías front-end y back-end, me apasiona convertir problemas complejos en 
                      soluciones digitales elegantes e intuitivas.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">
                      Además de mi enfoque en el desarrollo web, actualmente estoy ampliando mis horizontes
                      estudiando ciencia de datos e inteligencia artificial. También soy un gran apasionado
                      de los videojuegos, tanto desde la perspectiva del desarrollo como del gaming en general.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-4">
                      Find me on
                    </h3>
                    <div className="gap-4 flex flex-wrap justify-start">
                      <a
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
              <section id="projects">
                <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6 pt-5">
                  Featured Projects
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
                        Project One Title
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow">
                        A brief, one-sentence summary of the project's purpose
                        and key features.
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
                      data-alt="Abstract gradient of teal and green for Project Two's thumbnail"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaVt6u7aiu2hM2Z-Y73WrlIQe_4QVowgNpePr3DyT9g6Gypa_B1Us-tQU1IoVOM6fOXBrvX6L8LtOUMxnx5P2upek7Z8D0nQkke8l-aezAqgRIM1ZdT9QMIbOs7Jcj5g1l3M2EOYiDZ52InvPfYPa71SGacU86OC3xpPz1Xt5376_m3Ntm5bTg0DRr_9mmQsJf3yzRiya5EvEtV8qj2EJJ8kDXv1dxHwEOHowNkz34PM4AqXcqgwEBgFeni38VbkdmrTgXKt8W9JQ")',
                      }}
                    ></div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        Project Two Title
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow">
                        A brief, one-sentence summary of the project's purpose
                        and key features.
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
                        Project Three Title
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 flex-grow">
                        A brief, one-sentence summary of the project's purpose
                        and key features.
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
              <section className="px-4 py-16" id="contact">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center">
                    <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
                      Get In Touch
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
                      I'm currently open to new opportunities and
                      collaborations. Feel free to reach out if you have a
                      project in mind or just want to connect.
                    </p>
                  </div>
                  <div className="mt-12 bg-white dark:bg-[#15202b] rounded-xl p-6 md:p-10 shadow-md">
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            className="w-full h-12 px-4 bg-gray-100 dark:bg-[#233648] text-gray-900 dark:text-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            id="name"
                            placeholder="Your Name"
                            type="text"
                          />
                        </div>
                        <div>
                          <label
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            className="w-full h-12 px-4 bg-gray-100 dark:bg-[#233648] text-gray-900 dark:text-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            id="email"
                            placeholder="Your Email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          htmlFor="subject"
                        >
                          Subject
                        </label>
                        <input
                          className="w-full h-12 px-4 bg-gray-100 dark:bg-[#233648] text-gray-900 dark:text-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          id="subject"
                          placeholder="What's this about?"
                          type="text"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          className="w-full px-4 py-3 bg-gray-100 dark:bg-[#233648] text-gray-900 dark:text-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          id="message"
                          placeholder="Your message here..."
                          rows="5"
                        ></textarea>
                      </div>
                      <div className="text-right">
                        <button
                          className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors ml-auto"
                          type="submit"
                        >
                          <span className="truncate">Send Message</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </main>
            <footer className="text-center py-8 mt-16 border-t border-gray-200 dark:border-b-[#233648]">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 Nico Schiavon. All Rights Reserved.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
