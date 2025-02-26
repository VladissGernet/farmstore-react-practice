import styled from 'styled-components';

import { StyledContainer } from '/src/components/layout/container/styled';
import { Link } from 'react-router-dom';
import { ButtonStyles } from '/src/components/ui/button/styled';

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colorWhite};
  padding: 20px;

  ${StyledContainer} {
    display: flex;
    justify-content: space-between;
    min-height: 47px;
  }
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}
`;

export {
  StyledHeader,
  StyledLink
 };
