import React, { forwardRef } from 'react';

import { Specifications } from '/src/components/blocks/specifications/specifications';
import { GoodsSlide } from '/src/components/blocks/goods-slide/goods-slide';

import { Scrollbar } from 'swiper/modules';
import {
  StyledSwiperSlide,
  StyledSwiper,
  StyledDescription
} from './styled';

// ForwardRef нужен для прокидывания ссылки на swiper,
// чтобы можно было прокрутить до выбраного продукта.

const Goods = forwardRef(({goods}, swiperRef) => {
  if (goods?.length === false) {
    return null;
  }

  // Данные для табов
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
      // ref нужен для прокрутки до выбраного продукта через клик по checkbox
      ref={swiperRef}
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
            <GoodsSlide
              good={good}
              tabsData={goodsTabsData[index]}
            />
          </StyledSwiperSlide>
        ))
      }
    </StyledSwiper>
  )
});

Goods.displayName = 'Goods';

export { Goods };
