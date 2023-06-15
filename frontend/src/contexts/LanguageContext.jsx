import { createContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
// Utils
import { getLocalLang } from "utils/localStorage";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("");

  useEffect(() => {
    let localLang = getLocalLang();
    if (localLang.includes("zh")) return setLang("zh");
    if (localLang.includes("de")) return setLang("de");
    return setLang("en");
  }, []);

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageContext;
