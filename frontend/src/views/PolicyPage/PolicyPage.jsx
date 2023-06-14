// MUI
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material/index";

function PolicyPage() {
  const { t } = useTranslation();

  return <Typography variant="h4">{t("policy")}</Typography>;
}

export default PolicyPage;
