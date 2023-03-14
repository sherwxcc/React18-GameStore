import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import Card from "@mui/material/Card";

const StyledCard = styled(Card).attrs(() => ({
  variant: "basic",
}))`
  padding: 2rem;
  margin: 2rem;
  min-width: 400px;
  width: 40vw;
  max-width: 450px;
`;

function CustomCard({ children }) {
  return (
    <StyledCard raised={false} variant="basic">
      {children}
    </StyledCard>
  );
}

export default CustomCard;
