import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const StyledSwiper = styled(Swiper)`
  height: 500px;
  user-select: none;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  margin-right: 20px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  width: auto;

  overflow-y: auto;

  display: grid;
  grid-template-areas:
    'image name'
    'image tabs'
    'image price';
`;

const StyledImage = styled.img`
  grid-area: image;
  width: 248px;
  height: 248px;
`;

export {
  StyledSwiperSlide,
  StyledSwiper,
  StyledImage
};
