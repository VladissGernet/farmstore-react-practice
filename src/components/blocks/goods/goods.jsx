import React from 'react';

import { Scrollbar } from 'swiper/modules';
import {
  StyledSwiperSlide,
  StyledSwiper,
  StyledImage
} from './styled';

// Исправить баг с свайпером, когда не все слайды можно увидеть
// еще проблема с высотой слайдов

const Goods = ({goods}) => (
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
          <StyledImage
            src={good.image}
            alt={good.name}
            width={248}
            height={248}
          />
          <p>{good.name}</p>
        </StyledSwiperSlide>
      ))
    }
  </StyledSwiper>
);

export { Goods };
