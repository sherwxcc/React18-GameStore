import styled from "styled-components";
import Pagination from "@mui/material/Pagination";

export const CustomPagination = styled(Pagination)`
  && {
    & .Mui-selected {
      background: ${(props) => props.theme.palette.gradientDim};
    }
  }
`;
