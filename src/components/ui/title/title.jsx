import React from 'react';

import { StyledTitle } from './styled';

const Levels = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
};

const Title = ({
  children,
  level,
  size
}) => {
  return (
    <StyledTitle
      as={Levels[level]}
      $size={size}
    >
      {children}
    </StyledTitle>
  )
};

export { Title };
