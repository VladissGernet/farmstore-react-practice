import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';
import { Checkbox } from '/src/components/ui/checkbox/checkbox';

import { StyledOrder } from './styled';

const Order = () => {
  return (
    <StyledOrder>
      <Container>
        <Title
          level={1}
          size="big"
        >
          Закажите доставку
        </Title>
        <Checkbox />




      </Container>
    </StyledOrder>
  )
};

export { Order };
