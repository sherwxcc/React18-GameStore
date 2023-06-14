import i18n from "i18next";
import LanguageDectector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

i18n.use(Backend).use(LanguageDectector).use(initReactI18next).init({
  fallbackLng: "en",
});

export default i18n;
