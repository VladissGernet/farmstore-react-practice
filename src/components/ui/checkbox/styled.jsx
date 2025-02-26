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

export { StyledLabel, StyledText };
