import styled from 'styled-components';

import { StyledButton } from '/src/components/ui/button/styled';

const StyledTabs = styled.div`

  ${StyledButton} {
    color: ${(props) => props.theme.colorBlackForText};
    background-color: ${(props) => props.theme.colorButtonSecondary};
    border-color: ${(props) => props.theme.borderColorButtonSecondary};

    &:hover {
      background-color: ${(props) => props.theme.borderColorButtonSecondary};
    }
  }

  outline: 5px solid green;
`;

const StyledContent = styled.div`
  margin-top: 20px;
  padding: 20px;
  outline: 5px solid tomato;
  outline-offset: -5px;
`;

export { StyledTabs, StyledContent };
