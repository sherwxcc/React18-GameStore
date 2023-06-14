import { useContext } from "react";
import ColorContext from "contexts/ColorContext";

import styled from "styled-components";
import Box from "@mui/material/Box";

const GradientBox = styled(Box).attrs(() => ({
  variant: "gradient",
}))`
  background: ${(props) => props.theme.palette.gradientDim};
`;

function CustomBox({ children, gradient }) {
  const { theme } = useContext(ColorContext);

  return (
    <>
      <GradientBox gradient={gradient} theme={theme}>
        {children}
      </GradientBox>
    </>
  );
}

export default CustomBox;
