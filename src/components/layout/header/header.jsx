import React from 'react';
import { useMatch } from 'react-router-dom';

import { Container } from '/src/components/layout/container/container';
import { Logo } from '/src/components/ui/logo/logo';

import {
  StyledHeader,
  StyledLink
 } from './styled';

const Header = () => {
  const isLocationOrder = useMatch({ path: '/order' });

  return (
    <StyledHeader>
      <Container>
        <Logo />
        {
          !isLocationOrder &&
          <StyledLink to="/order">
            Заказать
          </StyledLink>
        }
      </Container>
    </StyledHeader>
  )
};

export { Header };
