import styled from 'styled-components';

const StyledText = styled.span`
  display: block;
`

const CheckboxState = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 22px;
  width: 22px;
  background-color: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);

  transition: all 0.3s ease;

  ${(props) => props.$isChecked && `
    background-color: ${props.theme.colorForButtonHover};`
  }
`;

const StyledLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;

  padding-right: 50px;

  &:hover ${CheckboxState} {
    border-color: ${(props) => props.theme.colorForButtonHover};

    ${(props) => props.$isChecked && `
      opacity: 0.6;`}
  }
`;



export { StyledLabel, StyledText, CheckboxState };
