import styled from 'styled-components';

const StyledImage = styled.img`
  grid-area: image;
  width: 248px;
  height: 248px;

  margin-top: 20px;
  margin-left: 20px;
`;

const StyledPriceWrapper = styled.div`
  padding: 2px 10px;
  background-color: ${(props) => props.theme.colorPrice};
  font-weight: 600;
`;

export {
  StyledImage,
  StyledPriceWrapper
 };
