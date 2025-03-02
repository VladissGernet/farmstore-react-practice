import React from 'react';

import {
  StyledSpecification,
  StyledContainer,
  StyledTerm,
  StyledDescription
 } from './styled';

const Specifications = ({data}) => {
  return (
    <StyledSpecification>
      {
        data?.length &&
        data.map((spec) => {
          return (
            <StyledContainer key={spec.property}>
              <StyledTerm>{spec.property}: </StyledTerm>
              <StyledDescription>{spec.value}</StyledDescription>
            </StyledContainer>
          )
        })
      }
    </StyledSpecification>
  );
};

export { Specifications };
