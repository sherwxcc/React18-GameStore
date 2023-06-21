// MUI
import { Box } from "@mui/material/index";
// Components
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

function SignInPage() {
  return (
    <div className="view">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SignInForm />
        <RegisterForm />
      </Box>
    </div>
  );
}

export default SignInPage;
