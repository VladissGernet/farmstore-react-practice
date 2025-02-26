import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';

import {
  StyledCompare
 } from './styled';

const Compare = () => {
  return (
    <StyledCompare>
      <Container>
        <Title
          level={2}
          size={"medium"}
        >
          Почему фермерские продукты лучше?
        </Title>
      </Container>
    </StyledCompare>
  )
}

export { Compare };
