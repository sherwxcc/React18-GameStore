import { useContext } from "react";
import styled from "styled-components";
// Contexts
import { ColorContext } from "contexts/index";
// MUI
import { Box } from "@mui/material/index";
// Components
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

const GradientBox = styled(Box).attrs(() => ({
  variant: "gradient",
}))`
  background: ${(props) => props.theme.palette.gradientDim};
`;

function SignInPage() {
  const { theme } = useContext(ColorContext);

  return (
    <>
      <GradientBox variant="gradient" theme={theme}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SignInForm />
          <RegisterForm />
        </Box>
      </GradientBox>
    </>
  );
}

export default SignInPage;
