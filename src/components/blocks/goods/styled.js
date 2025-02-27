import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const StyledSwiper = styled(Swiper)`
  max-height: 700px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  max-height: 300px;
  overflow-y: auto;
`;

export { StyledSwiperSlide, StyledSwiper };
