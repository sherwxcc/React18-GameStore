import styled from "styled-components";
import Card from "@mui/material/Card";

export const FormCard = styled(Card).attrs(() => ({
  variant: "form",
}))`
  padding: 2rem;
  margin: 2rem;
  min-width: 400px;
  width: 40vw;
  max-width: 450px;
`;

// background: ${(props) => props.theme.palette.gradientDim};
export const ProductCard = styled(Card).attrs(() => ({
  variant: "product",
}))`
  border-radius: 5px !important;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  background: ${(props) => props.theme.palette.gradient};
`;
