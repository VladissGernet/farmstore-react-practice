import styled, { css } from 'styled-components';

const TitleSizes = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small"
};

const TitleValues = {
  [TitleSizes.BIG]: {
    fontSize: "50px",
    lineHeight: "60px"
  },
  [TitleSizes.MEDIUM]: {
    fontSize: "40px",
    lineHeight: "50px"
  },
  [TitleSizes.SMALL]: {
    fontSize: "30px",
    lineHeight: "40px"
  }
}

const StyledTitle = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.colorTitle};


  ${(props) => (
    props.$size && css`
      font-size: ${TitleValues[props.$size].fontSize};
      line-height: ${TitleValues[props.$size].lineHeight};
    `)}

  font-weight: 700;
  `;

export { StyledTitle, TitleSizes };
