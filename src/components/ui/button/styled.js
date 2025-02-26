import styled, { css } from 'styled-components';

const ButtonStyles = css`
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  border: 1px solid ${(props) => props.theme.colorForButton};
  padding: 10px 20px;
  cursor: pointer;
  min-width: 100px;

  text-align: center;
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }

  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    opacity: 0.6;
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

export { StyledButton, ButtonStyles };
