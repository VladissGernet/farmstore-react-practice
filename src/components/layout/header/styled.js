import styled from 'styled-components';

import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colorWhite};
  padding: 20px;

  display: flex;
  justify-content: space-between;
  min-height: 47px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};

  padding: 10px 20px;
  min-width: 100px;

  text-align: center;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }

  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    opacity: 0.6;
  }
`;

export {
  StyledHeader,
  StyledLink
 };
