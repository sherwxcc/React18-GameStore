import { useContext, useState } from "react";
import ColorContext from "contexts/ColorContext";

import BadgeUnstyled, { badgeUnstyledClasses } from "@mui/base/BadgeUnstyled";
import styled from "styled-components";

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  position: relative;
  display: inline-block;
  line-height: 1;
  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    position: absolute;
    top: 0;
    right: 0;
    min-width: 22px;
    height: 22px;
    padding: 0 6px;
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    white-space: nowrap;
    text-align: center;
    border-radius: 12px;
    background: ${(props) => props.theme.palette.contrast};
    box-shadow: 0px 2px 8px ${(props) => props.theme.palette.contrast};
    transform: translate(0%, -30%);
    transform-origin: 100% 0;
  }
`;

function CustomBadge({ children }) {
  const { theme } = useContext(ColorContext);

  return (
    <>
      <StyledBadge theme={theme} badgeContent={5}>
        {children}
      </StyledBadge>
    </>
  );
}

export default CustomBadge;
