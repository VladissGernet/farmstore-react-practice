import styled, { css } from 'styled-components';

import { StyledButton } from '/src/components/ui/button/styled';
import { StyledLabel } from '/src/components/ui/checkbox/styled'

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

  ${StyledLabel} {
    margin-top: 6px;

    &:first-of-type {
      margin-top: 30px;
    }
  }
`;

const OrderSection = styled.section`
  ${SectionStyles}

  ${StyledButton} {
    font-size: 18px;
    font-weight: bold;
    line-height: 30px;

    display: block;
    width: 100%;
    margin-top: 40px;
  }
`;

const StyledInput = styled.input`
  padding: 10px 20px;
  margin-top: 30px;
  margin-bottom: 20px;

  display: block;
  box-sizing: border-box;
  width: 100%;

  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
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
