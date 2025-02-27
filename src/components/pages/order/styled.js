import styled from 'styled-components';

const StyledOrder = styled.section`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colorOrderBackground};
`;

const OrderSection = styled.section`
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
  display: block;
  background-color: #ffffff;
`;


export { StyledOrder, OrderSection };
