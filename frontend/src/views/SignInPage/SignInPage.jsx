// MUI
import { Box } from "@mui/material/index";
// Components
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

function SignInPage() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SignInForm />
        <RegisterForm />
      </Box>
    </>
  );
}

export default SignInPage;
