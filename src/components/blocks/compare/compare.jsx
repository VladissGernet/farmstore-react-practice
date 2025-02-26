import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';
import { CompareList } from '/src/components/blocks/compare-list/compare-list';

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
        <CompareList />
      </Container>
    </StyledCompare>
  )
}

export { Compare };
