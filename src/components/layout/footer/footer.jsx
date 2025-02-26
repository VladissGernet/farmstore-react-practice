import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Logo } from '/src/components/ui/logo/logo';

import { StyledFooter } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo />
      </Container>
    </StyledFooter>
  )
};

export { Footer };
