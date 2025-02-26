import React from 'react';

import { StyledButton } from './styled';

const Button = ({type = 'button', children}) => (
  <StyledButton type={type}>
    {children}
  </StyledButton>
);

export { Button };

