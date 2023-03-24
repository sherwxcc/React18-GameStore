import { useContext } from "react";
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
      if (res.code === 20001) {
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
          [field]: { status: "error", msg: "This field is required" },
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
            {inputMsg.firstname.msg}
          </CustomFormHelperText>
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
            {inputMsg.lastname.msg}
          </CustomFormHelperText>
        </FormControl>

        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
          Username
        </Typography>
        <FormControl fullWidth>
          <Input
            placeholder="Type your username"
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
            {inputMsg.username.msg}
          </CustomFormHelperText>
        </FormControl>

        <Typography variant="body2" color="text.primary" sx={{ mt: "1.5rem" }}>
          Password
        </Typography>
        <FormControl fullWidth sx={{ mb: "1rem" }}>
          <Input
            type={isVisible ? "text" : "password"}
            placeholder="Type your password"
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
            {inputMsg.password.msg}
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
          REGISTER
        </CustomButton>
      </CustomFormCard>
    </>
  );
}

export default RegisterForm;
