import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Reemplaza estos valores con los que obtengas en EmailJS Dashboard
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.error("Error al enviar el email:", error);
        setStatus("error");
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="px-4 py-16" id="contact">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-gray-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>
        <div className="mt-12 bg-white dark:bg-[#15202b] rounded-xl p-6 md:p-10 shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="name"
                >
                  {t.contact.name}
                </label>
                <input
                  className="w-full h-12 px-4 bg-gray-100 dark:bg-[#233648] text-gray-900 dark:text-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  id="name"
                  placeholder={t.contact.namePlaceholder}
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="email"
                >
                  {t.contact.email}
                </label>
                <input
                  className="w-full h-12 px-4 bg-gray-100 dark:bg-[#233648] text-gray-900 dark:text-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  id="email"
                  placeholder={t.contact.emailPlaceholder}
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                htmlFor="subject"
              >
                {t.contact.subject}
              </label>
              <input
                className="w-full h-12 px-4 bg-gray-100 dark:bg-[#233648] text-gray-900 dark:text-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                id="subject"
                placeholder={t.contact.subjectPlaceholder}
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                htmlFor="message"
              >
                {t.contact.message}
              </label>
              <textarea
                className="w-full px-4 py-3 bg-gray-100 dark:bg-[#233648] text-gray-900 dark:text-white border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                id="message"
                placeholder={t.contact.messagePlaceholder}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {status === "success" && (
              <p className="text-green-600 text-center font-medium">
                {t.contact.sendSuccess}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center font-medium">
                {t.contact.sendError}
              </p>
            )}

            <div className="text-right">
              <button
                className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors ml-auto"
                type="submit"
                disabled={status === "sending"}
              >
                <span className="truncate">
                  {status === "sending" ? t.contact.sending : t.contact.send}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
