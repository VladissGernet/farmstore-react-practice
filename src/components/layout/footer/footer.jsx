import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Logo } from '/src/components/ui/logo/logo';

import { StyledFooter, StyledDate } from './styled';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo />
        <StyledDate>Создано 2021</StyledDate>
      </Container>
    </StyledFooter>
  )
};

export { Footer };
