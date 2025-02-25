import React from 'react';
import { useMatch } from 'react-router-dom';
import { ReactComponent as LogoImage } from '/src/assets/logo.svg';

import {
  LogoText,
  StyledLogoNavLink,
  StyledLogoSpan,
} from './styled';

const Logo = () => {
  const isIndexPage = useMatch({ path: '/' });

  const LogoContent = () => (
    <>
      <LogoImage
        width="44"
        height="44"
      />
      <LogoText>Котокафе</LogoText>
    </>
  );

  return isIndexPage
  ? (
      <StyledLogoSpan>
        <LogoContent />
      </StyledLogoSpan>
    ) : (
      <StyledLogoNavLink to="/">
        <LogoContent />
      </StyledLogoNavLink>
    )
};

export { Logo };
