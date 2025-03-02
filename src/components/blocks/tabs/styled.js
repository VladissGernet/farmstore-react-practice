import styled from 'styled-components';

import { StyledButton } from '/src/components/ui/button/styled';

const StyledTabs = styled.div`
  ${StyledButton} {
    margin-right: 10px;
    color: ${(props) => props.theme.colorBlackForText};
    background-color: ${(props) => props.theme.colorButtonSecondary};
    border-color: ${(props) => props.theme.borderColorButtonSecondary};

    &:hover {
      background-color: ${(props) => props.theme.borderColorButtonSecondary};
    }

    &:disabled {
      opacity: unset;
      background-color: ${(props) => props.theme.colorButtonSecondaryDisabled};
      color: ${(props) => props.theme.colorWhite};
    }
  }
`;

const StyledContent = styled.div`
  margin-top: 20px;

  height: 145px;
  overflow-y: auto;
`;

export { StyledTabs, StyledContent };
