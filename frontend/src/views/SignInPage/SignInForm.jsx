import { useContext, useState, useEffect } from "react";
import AccountContext from "contexts/AccountContext";
import useVisibility from "hooks/useVisibility";

import CustomButton from "components/CustomButton/CustomButton";
import CustomCard from "components/CustomCard/CustomCard";
import {
  Box,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material/index";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function SignInForm() {
  const { isLoggedIn, token, handleLogin, handleRegister } =
    useContext(AccountContext);
  const [isVisible, handleVisibility] = useVisibility();
  const [credential, setCredential] = useState({ username: "", password: "" });

  return (
    <>
      {/* Sign In */}
      <CustomCard>
        <Typography
          variant="h3"
          align="center"
          color="text.primary"
          sx={{ mb: "2rem" }}
        >
          Sign In
        </Typography>

        <Box>
          <Typography variant="body2" color="text.primary">
            Username
          </Typography>
          <FormControl fullWidth>
            <Input
              placeholder="Type your username"
              required
              type="text"
              startAdornment={
                <InputAdornment position="start">
                  <AccountBoxIcon color="svgPrimary" />
                </InputAdornment>
              }
              onChange={(e) =>
                setCredential({
                  ...credential,
                  username: e.currentTarget.value,
                })
              }
            ></Input>
          </FormControl>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ mt: "1.5rem" }}
          >
            Password
          </Typography>
          <FormControl fullWidth>
            <Input
              placeholder="Type your password"
              required
              type={isVisible ? "text" : "password"}
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyIcon color="svgPrimary" />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleVisibility()}
                >
                  {isVisible ? (
                    <VisibilityIcon color="svgPrimary" />
                  ) : (
                    <VisibilityOffIcon color="svgPrimary" />
                  )}
                </InputAdornment>
              }
              onChange={(e) =>
                setCredential({
                  ...credential,
                  password: e.currentTarget.value,
                })
              }
            ></Input>
          </FormControl>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              cursor: "pointer",
              display: "inline-block",
              float: "right",
              mt: "1rem",
            }}
          >
            Forget Password?
          </Typography>
        </Box>

        <CustomButton
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            handleLogin(credential);
          }}
        >
          SIGN IN
        </CustomButton>
      </CustomCard>
    </>
  );
}

export default SignInForm;
