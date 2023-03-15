import { useContext } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
import GamerStopLogo from "assets/icons/GamerStopLogo.png";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppBar, Box, SvgIcon, Toolbar, Typography } from "@mui/material/index";
import styled from "styled-components";
import AccountContext from "contexts/AccountContext";
import ColorContext from "contexts/ColorContext";
import { Link } from "react-router-dom";
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

const SignInTypography = styled(MenuTypography)`
  background: ${(props) => props.theme.palette.gradient};
  &:hover {
    background: ${(props) => props.theme.palette.gradientLight};
  }
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
  const { isLoggedIn, user, handleLogOut } = useContext(AccountContext);

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <FlexBox>
              <Link to="/">
                <FlexBox sx={{ mr: "0.5rem", cursor: "pointer" }}>
                  <Box
                    component="img"
                    sx={{ width: "2rem", height: "2rem", mr: "0.5rem" }}
                    src={GamerStopLogo}
                  />
                  <Typography
                    variant="h3"
                    color="contrast"
                    sx={{ mr: "0.5rem" }}
                  >
                    GAMERSTOP
                  </Typography>
                </FlexBox>
              </Link>

              {leftNavbarItems.map((el) => (
                <Link to={el.route} key={el.id}>
                  <MenuTypography
                    variant="subtitle1"
                    color="text.primary"
                    theme={theme}
                  >
                    {el.label.toUpperCase()}
                  </MenuTypography>
                </Link>
              ))}
            </FlexBox>

            <FlexBox>
              {rightNavbarItems.map((el) => (
                <StyledIconBox key={el.id} theme={theme}>
                  <SvgIcon color="svgPrimary">{el.icon}</SvgIcon>
                </StyledIconBox>
              ))}

              <StyledIconBox theme={theme} onClick={() => toggleMode()}>
                <SvgIcon color="svgPrimary">
                  {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
                </SvgIcon>
              </StyledIconBox>

              {isLoggedIn ? (
                <SignInTypography
                  variant="subtitle1"
                  color="text.primary"
                  theme={theme}
                  sx={{ minWidth: "100px", textAlign: "center" }}
                  onClick={() => handleLogOut()}
                >
                  {user?.username || "LOG OUT"}
                </SignInTypography>
              ) : (
                <Link to="/signin">
                  <SignInTypography
                    variant="subtitle1"
                    color="text.primary"
                    theme={theme}
                  >
                    SIGN IN
                  </SignInTypography>
                </Link>
              )}
            </FlexBox>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
