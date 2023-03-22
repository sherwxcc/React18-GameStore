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
// Option 1
/** border: 2px solid;
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #9DBF9E, #C96BBC); */
// Option 2
/** border-radius: 5px;
  border: 2px solid transparant;
  background: linear-gradient(45deg, #9dbf9e, #c96bbc) border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude; 
  0 0 25px rgb(0 0 0 / 10%)
  */

export const ProductCard = styled(Card).attrs(() => ({
  variant: "product",
}))`
  height: 350px;
  box-shadow: 1px 1px 20px #9dbf9e40;
  background: #fefefe40;
  position: relative;
  border-radius: 10px !important;
  &:hover {
    box-shadow: 0 0 10px #c96bbc80;
  }
`;
