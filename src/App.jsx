import React from "react";
import Header from "./layouts/header";
import Hero from "./layouts/hero";
import About from "./layouts/about";
import Projects from "./layouts/projects";
import Contact from "./layouts/contact";
import Footer from "./layouts/footer";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="relative flex min-h-screen w-full flex-col font-sans text-gray-800 dark:text-gray-200 bg-background-light dark:bg-background-dark">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 py-5">
            <div className="layout-content-container flex w-full max-w-[960px] flex-1 flex-col">
              <Header />
              <main className="flex flex-col gap-16 md:gap-24">
                <Hero />
                <About />
                <Projects />
                <Contact />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
