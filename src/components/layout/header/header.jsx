import React from 'react';
import { useMatch } from 'react-router-dom';

import { Logo } from '/src/components/ui/logo/logo';

import {
  StyledHeader,
  StyledLink
 } from './styled';

const Header = () => {
  const isLocationOrder = useMatch({ path: '/order' });

  return (
    <StyledHeader>
      <Logo />
      {
        !isLocationOrder &&
        <StyledLink to="/order">
          Заказать
        </StyledLink>
      }
    </StyledHeader>
  )
};

export { Header };
