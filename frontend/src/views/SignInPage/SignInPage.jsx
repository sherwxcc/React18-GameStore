import styled from "styled-components";
// MUI
import { Box } from "@mui/material/index";
// Components
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

const RespBox = styled(Box)`
  display: flex;
  justify-content: center;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`;

function SignInPage() {
  return (
    <div className="view">
      <RespBox>
        <SignInForm />
        <RegisterForm />
      </RespBox>
    </div>
  );
}

export default SignInPage;
