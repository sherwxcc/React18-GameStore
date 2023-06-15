// MUI
import { useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
// Contexts
import LanguageContext from "contexts/LanguageContext";
// MUI
import { Box, Typography } from "@mui/material/index";
// Utils
import { getLocalLang } from "utils/localStorage";
// Markdowns
import policyDE from "assets/markdowns/policy.de.md";
import policyEN from "assets/markdowns/policy.en.md";
import policyZH from "assets/markdowns/policy.zh.md";

function PolicyPage() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);

  const [policy, setPolicy] = useState("");

  useEffect(() => {
    let policyMD =
      lang === "zh" ? policyZH : lang === "de" ? policyDE : policyEN;
    fetch(policyMD)
      .then((response) => response.text())
      .then((text) => {
        setPolicy(text);
      });
  }, [lang]);

  return (
    <>
      <Typography variant="h4">{t("policy")}</Typography>
      <Box sx={{ fontSize: "1rem" }}>
        <ReactMarkdown children={policy} />
      </Box>
    </>
  );
}

export default PolicyPage;
