import styled from "styled-components";
import { Box, Typography } from "@mui/material/index";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

const GradientBox = styled(Box).attrs(() => ({
  variant: "gradient",
  padding: "2rem",
}))`
  background: ${(props) => props.theme.palette.gradientDim};
`;

function SignInPage({ theme }) {
  
  return (
    <>
      <GradientBox variant="gradient" theme={theme}>
        <Typography variant="h2" color="text.primary" sx={{ mb: "1rem" }}>
          Account
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SignInForm />
          <RegisterForm />
        </Box>
      </GradientBox>
    </>
  );
}

export default SignInPage;
