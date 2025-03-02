import styled from 'styled-components';

import { StyledContainer } from '/src/components/layout/container/styled';
import { StyledTitle } from '/src/components/ui/title/styled';
import { StyledSwiper } from '/src/components/blocks/goods/styled';

const StyledOrder = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colorOrderBackground};

  ${StyledContainer} {
    display: grid;
    grid-template-areas:
      'title title'
      'form swiper';
    grid-template-columns: 1fr 2fr;
    gap: 40px 30px;

    & > ${StyledTitle} {
    grid-area: title;
  }
  }

  ${StyledSwiper} {
    grid-area: swiper;
    width: 100%;
  }
`;

export {
  StyledOrder,
};
