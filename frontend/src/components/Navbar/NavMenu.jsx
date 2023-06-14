import { useContext } from "react";
import { useTranslation } from "react-i18next";
import ColorContext from "contexts/ColorContext";
import {
  CustomHoverBox,
  CustomMenuBox,
  CustomMenuItemBox,
  CustomMenuTypography,
} from "components/customUI/index";
// import { CustomMenu } from "components/customUI/index";
import LANG from "data/lang";

function NavMenu() {
  const { theme } = useContext(ColorContext);
  const { i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <CustomHoverBox>
        <CustomMenuBox theme={theme}>
          {LANG?.map((el, i) => (
            <CustomMenuItemBox key={i}>
              <CustomMenuTypography
                variant="subtitle2"
                theme={theme}
                onClick={() => changeLang(el.lang)}
              >
                {el.nativeName}
              </CustomMenuTypography>
            </CustomMenuItemBox>
          ))}
        </CustomMenuBox>
      </CustomHoverBox>
    </>
  );
}

export default NavMenu;
