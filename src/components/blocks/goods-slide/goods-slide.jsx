import React from 'react';

import { Title } from '/src/components/ui/title/title';
import { Tabs } from '/src/components/blocks/tabs/tabs';

import {
  StyledImage,
  StyledPriceWrapper
 } from './styled';

const GoodsSlide = ({
  good,
  tabsData
}) => (
    <>
      <Title
        level={3}
        size="small"
      >
        {good.name}
      </Title>
      <StyledImage
        src={good.image}
        alt={good.name}
        width={248}
        height={248}
      />
      <Tabs data={tabsData} />
      <StyledPriceWrapper>
        <span>{good.price}</span> руб. / <span>{good.weight}</span> гр.
      </StyledPriceWrapper>
    </>
);

export { GoodsSlide };
