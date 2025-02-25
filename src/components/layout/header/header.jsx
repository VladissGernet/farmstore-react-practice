import React from 'react';

import { Logo } from '/src/components/ui/logo/logo';

import { StyledHeader } from './styled';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
};

export { Header };
