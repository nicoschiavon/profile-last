import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-center py-8 mt-16 border-t border-gray-200 dark:border-b-[#233648]">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {t.footer.copyright}
      </p>
    </footer>
  );
}
