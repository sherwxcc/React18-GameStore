import { useContext, useEffect, useState } from "react";
import AccountContext from "contexts/AccountContext";
import useVisibility from "hooks/useVisibility";

import CustomButton from "components/CustomButton/CustomButton";
import CustomCard from "components/CustomCard/CustomCard";

import {
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material/index";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import BadgeIcon from "@mui/icons-material/Badge";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function RegisterForm() {
  const { isLoggedIn, token, handleLogin, handleRegister } =
    useContext(AccountContext);
  const [isVisible, handleVisibility] = useVisibility();
  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  return (
    <>
      {/* Register */}
      <CustomCard>
        <Typography
          variant="h3"
          align="center"
          color="text.primary"
          sx={{ mb: "2rem" }}
        >
          Register
        </Typography>

        <Typography variant="body2" color="text.primary">
          First Name
        </Typography>
        <FormControl fullWidth>
          <Input
            placeholder="Type your first name"
            startAdornment={
              <InputAdornment position="start">
                <BadgeIcon color="svgPrimary" />
              </InputAdornment>
            }
            onChange={(e) =>
              setNewUser({
                ...newUser,
                firstname: e.currentTarget.value,
              })
            }
          ></Input>
        </FormControl>
        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
          Last Name
        </Typography>
        <FormControl fullWidth>
          <Input
            placeholder="Type your last name"
            startAdornment={
              <InputAdornment position="start">
                <BadgeIcon color="svgPrimary" />
              </InputAdornment>
            }
            onChange={(e) =>
              setNewUser({
                ...newUser,
                lastname: e.currentTarget.value,
              })
            }
          ></Input>
        </FormControl>
        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
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
              setNewUser({
                ...newUser,
                username: e.currentTarget.value,
              })
            }
          ></Input>
        </FormControl>
        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
          Password
        </Typography>
        <FormControl fullWidth sx={{ mb: "1rem" }}>
          <Input
            type={isVisible ? "text" : "password"}
            placeholder="Type your password"
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
              setNewUser({
                ...newUser,
                password: e.currentTarget.value,
              })
            }
          ></Input>
        </FormControl>
        <CustomButton variant="contained" color="primary">
          REGISTER
        </CustomButton>
      </CustomCard>
    </>
  );
}

export default RegisterForm;
