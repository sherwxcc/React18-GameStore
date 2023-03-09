import { useContext } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
import GamerStopLogo from "assets/icons/GamerStopLogo.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppBar, Box, SvgIcon, Toolbar, Typography } from "@mui/material/index";
import styled from "styled-components";
import ColorContext from "contexts/ColorContext";
import { leftNavbarItems, rightNavbarItems } from "./constants/navbarListItems";

const MenuTypography = styled(Typography).attrs(() => ({
  vairant: "subtitle1",
}))`
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  margin-right: 0.5rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.palette.gradient};
  }
`;

const LoginTypography = styled(MenuTypography)`
  background: ${(props) => props.theme.palette.gradient};
`;

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIconBox = styled(FlexBox)`
  border-radius: 5px;
  padding: 0.45rem;
  cursor: pointer;
  margin-right: 0.5rem;
  &:hover {
    background: ${(props) => props.theme.palette.gradient};
  }
`;

const Navbar = () => {
  const { theme, mode, toggleMode } = useContext(ColorContext);

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <FlexBox>
              <FlexBox sx={{ mr: "0.5rem", cursor: "pointer" }}>
                <Box
                  component="img"
                  sx={{ width: "2rem", height: "2rem", mr: "0.5rem" }}
                  src={GamerStopLogo}
                />
                <Typography variant="h3" color="contrast" sx={{ mr: "0.5rem" }}>
                  GAMERSTOP
                </Typography>
              </FlexBox>
              {leftNavbarItems.map((el) => (
                <MenuTypography
                  key={el.id}
                  variant="subtitle1"
                  color="textPrimary"
                  theme={theme}
                >
                  {el.label.toUpperCase()}
                </MenuTypography>
              ))}
            </FlexBox>

            <FlexBox>
              {rightNavbarItems.map((el) => (
                <StyledIconBox key={el.id} theme={theme}>
                  <SvgIcon color="textPrimary">{el.icon}</SvgIcon>
                </StyledIconBox>
              ))}

              <StyledIconBox theme={theme} onClick={() => toggleMode()}>
                <SvgIcon color="textPrimary">
                  {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                </SvgIcon>
              </StyledIconBox>

              <LoginTypography
                variant="subtitle1"
                color="textPrimary"
                theme={theme}
              >
                LOG IN
              </LoginTypography>
            </FlexBox>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
