import React from "react";

export default function Contact() {
  return (
    <section className="px-4 py-16" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out if you have a project in mind or just want to
            connect.
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
  );
}
