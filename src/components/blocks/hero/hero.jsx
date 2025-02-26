import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';

import { StyledHero, Description } from './styled';

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Title
          level={1}
          size="big"
        >
          Магазин фермерских продуктов с доставкой
        </Title>
        <Description>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
        </Description>
      </Container>
    </StyledHero>
  )
}

export { Hero };
