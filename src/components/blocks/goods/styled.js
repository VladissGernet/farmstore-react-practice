import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

const StyledSwiper = styled(Swiper)`
  margin-top: -20px;
  margin-left: -20px;
  padding: 20px 20px 24px;

  height: 910px;
  user-select: none;

  .swiper-scrollbar {
    top: 20px;
    right: 20px;
    height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 2.3%));
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  margin-right: 20px;
  width: auto;

  background-color: #ffffff;
  display: grid;
  grid-template-areas:
    'image name'
    'image tabs'
    'image price';
  grid-template-columns: 248px 1fr;
  gap: 0 40px;

  overflow-y: auto;

  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
`;

const StyledImage = styled.img`
  grid-area: image;
  width: 248px;
  height: 248px;

  margin-top: 20px;
  margin-left: 20px;
`;

export {
  StyledSwiperSlide,
  StyledSwiper,
  StyledImage
};
