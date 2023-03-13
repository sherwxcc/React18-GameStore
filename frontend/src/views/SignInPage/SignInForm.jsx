import { useContext, useState, useEffect } from "react";
import AccountContext from "contexts/AccountContext";
import useVisibility from "hooks/useVisibility";

import CustomCard from "components/CustomCard/CustomCard";
import {
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
  const { isLoggedIn, token, handleLogin } = useContext(AccountContext);
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
          onClick={() => handleLogin(credential)}
        >
          Sign In
        </Typography>

        <Typography variant="body2" color="text.primary">
          Username
        </Typography>
        <FormControl fullWidth>
          <Input
            placeholder="Type your username"
            startAdornment={
              <InputAdornment position="start">
                <AccountBoxIcon color="svgPrimary" />
              </InputAdornment>
            }
            onChange={(e) =>
              setCredential({ ...credential, username: e.currentTarget.value })
            }
          ></Input>
        </FormControl>
        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
          Password
        </Typography>
        <FormControl fullWidth>
          <Input
            placeholder="Type your password"
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
              setCredential({ ...credential, password: e.currentTarget.value })
            }
          ></Input>
        </FormControl>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            cursor: "pointer",
            float: "right",
            display: "block",
            mt: "0.5rem",
          }}
        >
          Forget Password?
        </Typography>
      </CustomCard>
    </>
  );
}

export default SignInForm;
