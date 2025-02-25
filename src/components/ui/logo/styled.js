import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';

const LogoText = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
`;

const valueLinkTag = css`
  display: inline-flex;

  align-items: center;
  gap: 20px;
`;

const StyledLogoNavLink = styled(NavLink)`
  ${valueLinkTag}

  color: ${(props) => props.theme.colorBlackForText};
  text-decoration: none;

  transition: all 0.3s ease;
  &:hover {
    opacity: 0.5;
  }
`;

const StyledLogoSpan = styled.span`
  ${valueLinkTag}
`;

export {
  LogoText,
  StyledLogoNavLink,
  StyledLogoSpan,
};
