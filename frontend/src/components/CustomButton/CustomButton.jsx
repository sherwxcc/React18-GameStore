import { useContext } from "react";
import ColorContext from "contexts/ColorContext";

import styled from "styled-components";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material/index";

const ContainedButton = styled(Button).attrs(() => ({
  variant: "gradient",
}))`
  background: ${(props) => props.theme.palette.gradient};
  &:hover: {
    background: ${(props) => props.theme.palette.reverseGradient};
  }
`;

function CustomButton({ children, onClick }) {
  const { theme, mode, toggleMode } = useContext(ColorContext);

  return (
    <>
      <ContainedButton
        variant="gradient"
        theme={theme}
        fullWidth
        sx={{ my: "1rem" }}
        onClick={onClick}
      >
        <Typography variant="subtitle2">{children}</Typography>
      </ContainedButton>
    </>
  );
}

export default CustomButton;
