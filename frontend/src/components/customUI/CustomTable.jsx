import styled from "styled-components";
import Box from "@mui/material/Box";

export const TableHead = styled(Box)`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  background: ${(props) => props.theme.palette.gradientDim};
`;

export const TableRecord = styled(Box)`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    box-shadow: 1px 1px 20px #9dbf9e40;
    color: ${(props) => props.theme.palette.contrast};
  }
`;

export const TableValue = styled(Box)`
  margin-right: 1rem;
`;
