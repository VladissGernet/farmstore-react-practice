import React from 'react';

import { Title } from '/src/components/ui/title/title';
import { Tabs } from '/src/components/blocks/tabs/tabs';

import { Scrollbar } from 'swiper/modules';
import {
  StyledSwiperSlide,
  StyledSwiper,
  StyledImage
} from './styled';

// Исправить баг с свайпером, когда не все слайды можно увидеть
// еще проблема с высотой слайдов

const Goods = ({goods}) => {
  if (goods?.length === false) {
    return null;
  }

  const tabsData = [
    {

    }
  ];


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
        goods.map((good) => (
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
            <Tabs />
          </StyledSwiperSlide>
        ))
      }
    </StyledSwiper>
  )
};

export { Goods };
