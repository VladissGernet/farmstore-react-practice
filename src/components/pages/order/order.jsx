import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';

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





      </Container>
    </StyledOrder>
  )
};

export { Order };
