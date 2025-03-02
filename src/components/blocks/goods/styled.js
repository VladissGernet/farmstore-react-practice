import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import { StyledTitle } from '/src/components/ui/title/styled';
import { StyledTabs } from 'src/components/blocks/tabs/styled';
import { StyledPriceWrapper } from '/src/components/blocks/goods-slide/styled';

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
    'image price'
    'image .';
  grid-template-columns: 248px 1fr;
  gap: 0 40px;

  overflow-y: auto;

  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);

  ${StyledTitle} {
    grid-area: name;
    margin-top: 20px;
  }

  ${StyledTabs} {
    grid-area: tabs;
    align-self: start;
  }

  ${StyledPriceWrapper} {
    grid-area: price;
    align-self: end;
    justify-self: start;
  }
`;

const StyledDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;

export {
  StyledSwiperSlide,
  StyledSwiper,
  StyledDescription
};
