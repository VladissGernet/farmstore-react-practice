import React from 'react';

import { StyledButton } from './styled';

const Button = ({
  type = 'button',
  children,
  isDisabled,
  onClick
  }) => (
  <StyledButton
    type={type}
    disabled={isDisabled}
    onClick={onClick}
  >
    {children}
  </StyledButton>
);

export { Button };

