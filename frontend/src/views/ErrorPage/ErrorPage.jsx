import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// MUI
import { Box, Typography } from "@mui/material/index";

function ErrorPage() {
  const { t } = useTranslation();

  return (
    <div className="view">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={require("assets/images/others/warning.png")}
          style={{ maxWidth: "130px", marginRight: "5%" }}
        />
        <Box>
          <Typography variant="h4">
            {t("oops")}
            {" ! "}
            {t("pageDoesntExist")}
          </Typography>
          <Typography variant="body2" sx={{ display: "inline-block" }}>
            {t("pleaseCheckUrl")}
          </Typography>
          <Typography variant="body2" mx={1} sx={{ display: "inline-block" }}>
            {t("or")}
          </Typography>
          <Link to="/">
            <Typography
              variant="body2"
              color="contrast"
              sx={{ display: "inline-block", cursor: "pointer" }}
            >
              {t("returnHome")}
            </Typography>
          </Link>
        </Box>
      </Box>
    </div>
  );
}

export default ErrorPage;
