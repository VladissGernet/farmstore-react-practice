import styled from 'styled-components';

import { StyledTitle } from '/src/components/ui/title/styled';

const StyledCompare = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colorWhite};

  ${StyledTitle} {
    text-align: center;
  }
`;

export {
  StyledCompare
 };
