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

export const ProductCard = styled(Card).attrs(() => ({
  variant: "product",
}))`
  padding: 1rem;
  margin: 1rem;
  min-width: 300px;
  width: 300px;
  border-radius: 5px !important;
`;
