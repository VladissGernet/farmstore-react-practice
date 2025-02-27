import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;

  padding-right: 50px;

  background: tomato;
`;

const StyledText = styled.span`
  outline: 5px solid black;
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

  ${(props) => props.$isChecked && `
    background-color: green;`
  }
`;

export { StyledLabel, StyledText, CheckboxState };
