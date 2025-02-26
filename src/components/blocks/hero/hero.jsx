import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';

const Hero = () => {
  return (
    <Container>
      <Title
        level={1}
        size="big"
      >
        Фермерские продукты
      </Title>
    </Container>
  )
}

export { Hero };
