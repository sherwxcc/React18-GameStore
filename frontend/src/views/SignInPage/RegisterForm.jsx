import { useContext } from "react";
import { useTranslation } from "react-i18next";
// Contexts
import { AccountContext, MessageContext } from "contexts/index";
// Hooks
import useVisibility from "hooks/useVisibility";
import useValidation from "hooks/useValidation";
// MUI
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
// Custom components
import {
  CustomButton,
  CustomFormHelperText,
  CustomFormCard,
} from "components/customUI/index";
// Constants
import MESSAGE_CODE from "data/messageCode";

function RegisterForm() {
  const { t } = useTranslation();

  const { handleRegister } = useContext(AccountContext);
  const { messageHandler } = useContext(MessageContext);

  const [isVisible, handleVisibility] = useVisibility();
  const [
    inputValue,
    inputMsg,
    setInputValue,
    setInputMsg,
    usernameCheck,
    nameCheck,
    passwordCheck,
    resetInputValue,
    resetInputMsg,
  ] = useValidation();

  const registerHandler = async () => {
    // Check if all the values are true
    if (Object.values(inputValue).every(Boolean)) {
      let res = await handleRegister({
        firstname: inputValue.firstname,
        lastname: inputValue.lastname,
        username: inputValue.username,
        password: inputValue.password,
      });
      if (res.code === 10003) {
        return setInputMsg({
          ...inputMsg,
          username: {
            status: MESSAGE_CODE[res.code].type,
            msg: MESSAGE_CODE[res.code].message,
          },
        });
      }
      if (res.code === 20002) {
        messageHandler(
          MESSAGE_CODE[res.code].type,
          MESSAGE_CODE[res.code].message
        );
        resetInputValue();
        resetInputMsg();
      }
    }

    for (let field in inputValue) {
      if (!inputValue[field]) {
        await setInputMsg({
          ...inputMsg,
          [field]: { status: "error", msg: t("fieldRequired") },
        });
      }
    }
  };

  return (
    <>
      {/* Register */}
      <CustomFormCard>
        <Typography
          variant="h3"
          align="center"
          color="text.primary"
          sx={{ mb: "2rem" }}
        >
          {t("register")}
        </Typography>

        <Typography variant="body2" color="text.primary">
          {t("firstName")}
        </Typography>
        <FormControl fullWidth>
          <Input
            placeholder={t("typeFirstName")}
            startAdornment={
              <InputAdornment position="start">
                <BadgeIcon color="svgPrimary" />
              </InputAdornment>
            }
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                firstname: e.currentTarget.value,
              })
            }
            onBlur={(e) => {
              setInputValue({
                ...inputValue,
                firstname: e.currentTarget.value.trim(),
              });
              nameCheck("firstname");
            }}
          ></Input>
          <CustomFormHelperText margin="dense" type={inputMsg.firstname.status}>
            {t(`${inputMsg.firstname.msg}`)}
          </CustomFormHelperText>
        </FormControl>

        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
          {t("lastName")}
        </Typography>
        <FormControl fullWidth>
          <Input
            placeholder={t("typeLastName")}
            startAdornment={
              <InputAdornment position="start">
                <BadgeIcon color="svgPrimary" />
              </InputAdornment>
            }
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                lastname: e.currentTarget.value,
              })
            }
            onBlur={(e) => {
              setInputValue({
                ...inputValue,
                lastname: e.currentTarget.value.trim(),
              });
              nameCheck("lastname");
            }}
          ></Input>
          <CustomFormHelperText margin="dense" type={inputMsg.lastname.status}>
            {t(`${inputMsg.lastname.msg}`)}
          </CustomFormHelperText>
        </FormControl>

        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
          {t("username")}
        </Typography>
        <FormControl fullWidth>
          <Input
            placeholder={t("typeUsername")}
            required
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
                username: e.currentTarget.value.trim(),
              });
              usernameCheck();
            }}
          ></Input>
          <CustomFormHelperText margin="dense" type={inputMsg.username.status}>
            {t(`${inputMsg.username.msg}`)}
          </CustomFormHelperText>
        </FormControl>

        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
          {t("password")}
        </Typography>
        <FormControl fullWidth sx={{ mb: "1rem" }}>
          <Input
            type={isVisible ? "text" : "password"}
            placeholder={t("typePassword")}
            required
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
              passwordCheck();
            }}
          ></Input>
          <CustomFormHelperText margin="dense" type={inputMsg.password.status}>
            {t(`${inputMsg.password.msg}`)}
          </CustomFormHelperText>
        </FormControl>
        <CustomButton
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.stopPropagation();
            registerHandler();
          }}
        >
          {t("register").toUpperCase()}
        </CustomButton>
      </CustomFormCard>
    </>
  );
}

export default RegisterForm;
