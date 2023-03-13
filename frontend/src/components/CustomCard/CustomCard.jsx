import styled from "styled-components";
import Card from "@mui/material/Card";

const StyledCard = styled(Card).attrs(() => ({
  variant: "basic",
}))`
  padding: 2rem;
  margin: 1rem 3rem;
  min-width: 400px;
  max-width: 90vw;
`;

function CustomCard({ children }) {
  return (
    <StyledCard raised={false} variant="basic">
      {children}
    </StyledCard>
  );
}

export default CustomCard;
