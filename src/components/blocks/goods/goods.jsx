import React from 'react';

import { StyledSwiperSlide, StyledSwiper } from './styled';
import { Scrollbar } from 'swiper/modules';

const Goods = ({goods}) => (
  <StyledSwiper
    spaceBetween={50}
    slidesPerView={3}
    direction={'vertical'}
    modules={[Scrollbar]}
    scrollbar={{
      hide: false,
    }}
  >
    <StyledSwiperSlide>Slide 1</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 2</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 3</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 4</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 5</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 6</StyledSwiperSlide>
    <StyledSwiperSlide>Slide 7</StyledSwiperSlide>
  </StyledSwiper>
);

export { Goods };
