import React from 'react';

import { Title } from '/src/components/ui/title/title';
import { Tabs } from '/src/components/blocks/tabs/tabs';
import { Specifications } from '/src/components/blocks/specifications/specifications';

import { Scrollbar } from 'swiper/modules';
import {
  StyledSwiperSlide,
  StyledSwiper,
  StyledImage,
  StyledDescription
} from './styled';

const Goods = ({goods}) => {
  if (goods?.length === false) {
    return null;
  }

  const goodsTabsData = goods.map((good) => {
    return [
        {
          title: 'Описание',
          content:
            <StyledDescription>
              {good.description}
            </StyledDescription>
        },
        {
          title: 'Характеристики',
          content: <Specifications data={good.specifications}/>
        },
        {
          title: 'Свойства',
          content: <Specifications data={good.structure}/>
        },
    ]
  });

  return (
    <StyledSwiper
      spaceBetween={20}
      slidesPerView={3}
      direction={'vertical'}
      modules={[Scrollbar]}
      scrollbar={{
        hide: false,
      }}
    >
      {
        goods?.length &&
        goods.map((good, index) => (
          <StyledSwiperSlide key={good.id}>
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
            <Tabs data={goodsTabsData[index]} />
          </StyledSwiperSlide>
        ))
      }
    </StyledSwiper>
  )
};

export { Goods };
