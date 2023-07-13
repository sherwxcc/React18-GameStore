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
  box-shadow: 1px 1px 20px #9dbf9e40;
  @media (max-width: 820px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export const ProductCard = styled(Card).attrs(() => ({
  variant: "product",
}))`
  box-shadow: 1px 1px 20px #9dbf9e40;
  background: #fefefe20 !important;
  &:hover {
    box-shadow: 0 0 10px #c96bbc80;
  }
`;

export const CartCard = styled(Card).attrs(() => ({
  variant: "cart",
}))`
  margin: 1rem;
  box-shadow: 1px 1px 20px #9dbf9e40;
  background: #fefefe20 !important;
  display: flex;
  align-items: center;
  padding: 1rem;
  &:hover {
    box-shadow: 0 0 10px #c96bbc80;
  }
`;
