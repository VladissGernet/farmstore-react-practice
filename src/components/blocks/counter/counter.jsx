import React from 'react';

import { StyledTitle, StyledPrice } from './styled';

const Counter = ({
  states,
  values,
  resultPrice
}) => {
  if (states.length !== values.length) {
    return null;
  }

  const result = states.reduce((sum, state, index) => state ? sum + values[index] : sum, 0);
  resultPrice.current = result;

  return (
    <>
      <StyledTitle>Цена:</StyledTitle>
      <StyledPrice>{result} руб.</StyledPrice>
    </>
  )
};

export { Counter };
