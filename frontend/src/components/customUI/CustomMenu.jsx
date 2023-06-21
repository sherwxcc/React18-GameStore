import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const HoverBox = styled(Box)`
  position: absolute;
  text-align: center;
  top: 0;
  padding-top: 66px;
`;

export const MenuBox = styled(Box)`
  border-radius: 10px;
  box-shadow: 0px 1px 20px #9dbf9e40;
  background: ${(props) => props.theme.palette.basicBg};
  z-index: 10;
  opacity: 1;
`;

export const MenuItemBox = styled(Box)`
  padding: 0.5rem;
`;

export const MenuTypography = styled(Typography)`
  border-radius: 5px;
  padding: 0.5rem;
  color: ${(props) => props.theme.palette.text.primary};
  &:hover {
    background: ${(props) => props.theme.palette.gradientDim};
  }
`;
