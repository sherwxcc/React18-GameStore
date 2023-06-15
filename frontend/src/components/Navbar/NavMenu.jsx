import { useContext } from "react";
// Contexts
import ColorContext from "contexts/ColorContext";
import LanguageContext from "contexts/LanguageContext";
// Components
import {
  CustomHoverBox,
  CustomMenuBox,
  CustomMenuItemBox,
  CustomMenuTypography,
} from "components/customUI/index";
// Constants
import LANG from "data/lang";

function NavMenu() {
  const { theme } = useContext(ColorContext);
  const { changeLang } = useContext(LanguageContext);

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
