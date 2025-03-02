import styled from 'styled-components';

const StyledSpecification = styled.dl`
  margin: 0;
`;

const StyledContainer = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 6px;
  }
`;

const StyledTerm = styled.dt`
  display: inline;
  font-weight: 600;
`;

const StyledDescription = styled.dd`
  display: inline;
  margin: 0;
`;

export {
  StyledSpecification,
  StyledContainer,
  StyledTerm,
  StyledDescription
};
