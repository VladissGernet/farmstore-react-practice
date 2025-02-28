import React from 'react';

import { StyledSwiperSlide, StyledSwiper } from './styled';
import { Scrollbar } from 'swiper/modules';

const Goods = ({goods}) => (
  <StyledSwiper
    spaceBetween={10}
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
          <p>{good.name}</p>
        </StyledSwiperSlide>
      ))
    }
  </StyledSwiper>
);

export { Goods };
