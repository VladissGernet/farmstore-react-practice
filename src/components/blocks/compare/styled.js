import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StyledContainer } from 'src/components/layout/container/styled';
import { StyledTitle } from '/src/components/ui/title/styled';
import { ButtonStyles } from '/src/components/ui/button/styled';

const StyledCompare = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colorWhite};

  ${StyledContainer} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 30px;

    & > ${StyledTitle} {
      text-align: center;
      grid-column: 1 / 3;
      margin-bottom: 50px;
    }
  }
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}

  margin-top: 40px;
  grid-column: 1 / 3;
  justify-self: center;
  min-width: 200px;
`;

export {
  StyledCompare,
  StyledLink
 };
