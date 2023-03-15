import { useContext } from "react";
import ColorContext from "contexts/ColorContext";

import { FormHelperText } from "@mui/material/index";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

const CustomFormHelperText = ({ children, type }) => {
  const { theme } = useContext(ColorContext);

  return (
    <FormHelperText
      theme={theme}
      type={type}
      sx={{
        color: `${
          type === "success"
            ? theme.palette.primary.main
            : theme.palette.error.main
        }`,
        m: "3px 0 3px 0",
        display: "flex !important",
        alignItems: "top",
      }}
    >
      {type === "success" && (
        <CheckCircleIcon
          sx={{
            fontSize: "1.1em",
            verticalAlign: "middle",
            m: "3px 3px 4px 0",
          }}
        />
      )}
      {type === "error" && (
        <ErrorIcon
          sx={{
            fontSize: "1.1em",
            verticalAlign: "middle",
            m: "2px 3px 3px 0",
          }}
        />
      )}

      {children}
    </FormHelperText>
  );
};

export default CustomFormHelperText;
