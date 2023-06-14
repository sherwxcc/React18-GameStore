import { useTranslation } from "react-i18next";
// MUI
import { Typography } from "@mui/material/index";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h4">{t("landingText")}</Typography>
    </>
  );
}

export default LandingPage;
