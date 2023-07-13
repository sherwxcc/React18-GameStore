import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// Contexts
import AccountContext from "contexts/AccountContext";
import CartContext from "contexts/CartContext";
import ColorContext from "contexts/ColorContext";
// Constants
import { leftNavbarItems } from "./constants/navbarListItems";
// Components
import {
  CustomHoverBox,
  CustomMenuBox,
  CustomMenuItemBox,
  CustomMenuTypography,
} from "components/customUI/index";

function RespNav() {
  const { t } = useTranslation();
  const { handleClearCart } = useContext(CartContext);
  const { theme } = useContext(ColorContext);
  const { isLoggedIn, user, handleLogOut } = useContext(AccountContext);

  return (
    <>
      <CustomHoverBox>
        <CustomMenuBox theme={theme} sx={{ width: "max-content" }}>
          {leftNavbarItems.map(
            (el, i) =>
              (isLoggedIn || el.id !== 2) && (
                <CustomMenuItemBox key={i}>
                  <Link to={`${el.route}`}>
                    <CustomMenuTypography variant="subtitle2" theme={theme}>
                      {t(`${el.label}`)}
                    </CustomMenuTypography>
                  </Link>
                </CustomMenuItemBox>
              )
          )}
          {isLoggedIn ? (
            <CustomMenuItemBox>
              <CustomMenuTypography
                variant="subtitle2"
                theme={theme}
                onClick={() => {
                  handleClearCart();
                  handleLogOut();
                }}
              >
                {user?.username || t("logOut").toUpperCase()}
              </CustomMenuTypography>
            </CustomMenuItemBox>
          ) : (
            <CustomMenuItemBox>
              <Link to="/signin">
                <CustomMenuTypography variant="subtitle2" theme={theme}>
                  {t("signIn")}
                </CustomMenuTypography>
              </Link>
            </CustomMenuItemBox>
          )}
        </CustomMenuBox>
      </CustomHoverBox>
    </>
  );
}

export default RespNav;
