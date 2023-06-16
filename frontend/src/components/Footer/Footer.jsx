import { useTranslation } from "react-i18next";
// Components
import { CustomBox } from "components/customUI/index";
// MUI
import { Box, Typography } from "@mui/material/index";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer>
        <CustomBox>
          <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
            <Box>
              <Typography variant="h4">GamerStop</Typography>
              <Typography variant="caption">{t("footerDisclaimer")}</Typography>
            </Box>
          </Box>
        </CustomBox>
      </footer>
    </>
  );
}

export default Footer;
