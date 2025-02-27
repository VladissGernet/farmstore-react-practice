import styled, { css } from 'styled-components';

import { StyledButton } from '/src/components/ui/button/styled';
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
  }

  ${StyledTitle} {
    grid-area: title;
  }

  ${StyledSwiper} {
    grid-area: swiper;
    width: 100%;
  }
`;

const SectionStyles = css`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
  display: block;
  background-color: #ffffff;
`;

const ProductsSection = styled.section`
  ${SectionStyles}
`;

const OrderForm = styled.form`
  grid-area: form;
`;

const OrderSection = styled.section`
  ${SectionStyles}

  ${StyledButton} {
    font-size: 18px;
    font-weight: bold;
    line-height: 58px;

    display: block;
    width: 100%;
    margin-top: 20px;
  }
`
const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  padding: 10px 20px;
  display: block;
  margin-bottom: 20px;
  background-color: #f7f7f7;
`;

export {
  StyledOrder,
  ProductsSection,
  OrderSection,
  StyledInput,
  OrderForm
};
