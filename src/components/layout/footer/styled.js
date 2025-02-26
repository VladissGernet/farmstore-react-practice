import styled from 'styled-components';

import { StyledContainer } from '/src/components/layout/container/styled';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colorWhite};
  padding: 20px;
  border-top: 1px solid ${(props) => props.theme.colorGray};

  ${StyledContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledDate = styled.span`
  color: ${(props) => props.theme.colorBlackForText};
`;

export { StyledFooter, StyledDate };
