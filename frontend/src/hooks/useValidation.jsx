import { useState } from "react";
import { checkAlphanum, checkName, checkPassword } from "utils/dataValidation";

const useValidation = () => {
  const [inputValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const [inputMsg, setInputMsg] = useState({
    firstname: { status: "", msg: "" },
    lastname: { status: "", msg: "" },
    username: { status: "", msg: "" },
    password: { status: "", msg: "" },
  });

  const nameCheck = (namefield) => {
    checkName(inputValue[namefield]?.trim())
      ? setInputMsg({
          ...inputMsg,
          [namefield]: { status: "success", msg: "OK!" },
        })
      : setInputMsg({
          ...inputMsg,
          [namefield]: {
            status: "error",
            msg: `Your ${namefield} needs to be 2 to 25 characters long with alphabets`,
          },
        });
  };

  const usernameCheck = () => {
    checkAlphanum(inputValue.username.trim())
      ? setInputMsg({
          ...inputMsg,
          username: { status: "success", msg: "OK!" },
        })
      : setInputMsg({
          ...inputMsg,
          username: {
            status: "error",
            msg: "Your username needs to be 2 to 20 characters long with alphabets or numbers",
          },
        });
  };

  const passwordCheck = () => {
    checkPassword(inputValue.password.trim())
      ? setInputMsg({
          ...inputMsg,
          password: { status: "success", msg: "OK!" },
        })
      : setInputMsg({
          ...inputMsg,
          password: {
            status: "error",
            msg: "Your password needs to be 3 to 20 characters long with alphabets or numbers",
          },
        });
  };

  const resetInputValue = () => {
    setInputValue({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
    });
  };

  const resetInputMsg = () => {
    setInputMsg({
      firstname: { status: "", msg: "" },
      lastname: { status: "", msg: "" },
      username: { status: "", msg: "" },
      password: { status: "", msg: "" },
    });
  };

  return [
    inputValue,
    inputMsg,
    setInputValue,
    setInputMsg,
    usernameCheck,
    nameCheck,
    passwordCheck,
    resetInputValue,
    resetInputMsg,
  ];
};

export default useValidation;
