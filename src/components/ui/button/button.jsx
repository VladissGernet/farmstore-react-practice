import React from 'react';

import { StyledButton } from './styled';

const Button = ({
  type = 'button',
  children,
  isDisabled
  }) => (
  <StyledButton
    type={type}
    disabled={isDisabled}
  >
    {children}
  </StyledButton>
);

export { Button };

