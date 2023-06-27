import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
// Contexts
import { AccountContext, MessageContext } from "contexts/index";
// Hooks
import useValidation from "hooks/useValidation";
import useVisibility from "hooks/useVisibility";
// MUI
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
// Custom components
import {
  CustomButton,
  CustomFormCard,
  CustomFormHelperText,
} from "components/customUI/index";
// Constants
import MESSAGE_CODE from "data/messageCode";

function SignInForm() {
  const { t } = useTranslation();

  const { handleLogIn } = useContext(AccountContext);
  const { messageHandler } = useContext(MessageContext);

  const [
    inputValue,
    inputMsg,
    setInputValue,
    setInputMsg,
    resetInputValue,
    resetInputMsg,
  ] = useValidation();
  const [isVisible, handleVisibility] = useVisibility();
  const [failMessage, setFailMessage] = useState("");

  const loginHandler = async () => {
    if (inputValue.username && inputValue.password) {
      let res = await handleLogIn({
        username: inputValue.username,
        password: inputValue.password,
      });
      if (res.code === 20001) {
        setFailMessage("");
        messageHandler(
          MESSAGE_CODE[res.code].type,
          MESSAGE_CODE[res.code].message
        );
        resetInputValue();
        resetInputMsg();
        return;
      }
      setFailMessage(MESSAGE_CODE[res.code].message);
      return;
    }

    if (!inputValue.username) {
      setInputMsg({
        ...inputMsg,
        username: { status: "error", msg: "This field is required" },
      });
    }
    if (!inputValue.password) {
      setInputMsg({
        ...inputMsg,
        password: { status: "error", msg: "This field is required" },
      });
    }
  };

  return (
    <>
      <CustomFormCard>
        <Typography
          variant="h3"
          align="center"
          color="text.primary"
          sx={{ mb: "2rem" }}
        >
          {t("signIn")}
        </Typography>

        <Box>
          <Typography variant="body2" color="text.primary">
            {t("username")}
          </Typography>
          <FormControl fullWidth>
            <Input
              placeholder={t("typeUsername")}
              required
              type="text"
              value={inputValue.username}
              error={inputMsg.username.status === "error"}
              startAdornment={
                <InputAdornment position="start">
                  <AccountBoxIcon color="svgPrimary" />
                </InputAdornment>
              }
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  username: e.currentTarget.value,
                })
              }
              onBlur={(e) => {
                setInputValue({
                  ...inputValue,
                  username: inputValue.username.trim(),
                });
              }}
            ></Input>
            <CustomFormHelperText
              margin="dense"
              type={inputMsg.username.status}
            >
              {t(`${inputMsg.username.msg}`)}
            </CustomFormHelperText>
          </FormControl>
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ mt: "1.5rem" }}
          >
            {t("password")}
          </Typography>
          <FormControl fullWidth>
            <Input
              placeholder={t("typePassword")}
              required
              type={isVisible ? "text" : "password"}
              value={inputValue.password}
              error={inputMsg.password.status === "error"}
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
                setInputValue({
                  ...inputValue,
                  password: e.currentTarget.value,
                })
              }
              onBlur={(e) => {
                setInputValue({
                  ...inputValue,
                  password: e.currentTarget.value.trim(),
                });
              }}
            ></Input>
            <CustomFormHelperText
              margin="dense"
              type={inputMsg.password.status}
            >
              {t(`${inputMsg.password.msg}`)}
            </CustomFormHelperText>
          </FormControl>

          {/* <Typography
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
          </Typography> */}
        </Box>

        {failMessage && (
          <Typography
            variant="caption"
            color="error"
            sx={{
              display: "block",
              float: "right",
              mt: "1rem",
            }}
          >
            {t(`${failMessage}`)}
          </Typography>
        )}

        <CustomButton
          variant="contained"
          color="primary"
          onClick={() => loginHandler()}
        >
          {t("signIn").toUpperCase()}
        </CustomButton>
      </CustomFormCard>
    </>
  );
}

export default SignInForm;
