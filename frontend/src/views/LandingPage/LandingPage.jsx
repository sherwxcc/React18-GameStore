import { useTranslation } from "react-i18next";
// MUI
import { Box, Typography, SvgIcon } from "@mui/material/index";
// import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// Stylesheet
import "./landingPage.scss";

function LandingPage() {
  const { t } = useTranslation();

  return (
    <Box id="herobanner-box">
      <img
        src={require("assets/banners/banner1.png")}
        alt="hero banner"
        loading="lazy"
      />
      <Box id="herobanner-content">
        <Box className="view">
          <Box>
            <Typography variant="h1">
              {t("landingText").toUpperCase()}
            </Typography>
          </Box>
          {/* <Box>
            <SvgIcon>
              <KeyboardDoubleArrowDownIcon />
            </SvgIcon>
            <Typography
              variant="body2"
              sx={{ letterSpacing: "0.1em", marginLeft: "0.1em" }}
            >
              {t("learnMore").toUpperCase()}
            </Typography>
            <SvgIcon>
              <KeyboardDoubleArrowDownIcon />
            </SvgIcon>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;
