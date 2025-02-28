import styled, { css } from 'styled-components';

import { StyledButton } from '/src/components/ui/button/styled';

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
`;

const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  padding: 10px 20px;
  display: block;
  margin-bottom: 20px;
  background-color: #f7f7f7;
`;

const StyledOrderForm = styled.form`
  grid-area: form;
`;

export {
  ProductsSection,
  OrderSection,
  StyledInput,
  StyledOrderForm
};
