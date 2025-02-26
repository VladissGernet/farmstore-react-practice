import styled from 'styled-components';

import aboutBackground from '/src/assets/about.svg';

import { StyledContainer } from '/src/components/layout/container/styled';
import { StyledTitle } from '/src/components/ui/title/styled';

const StyledHero = styled.section`
  padding-top: 80px;
  background-color: #d8ecfe;

  ${StyledContainer} {
    background-image: url(${aboutBackground});
    background-repeat: no-repeat;
    background-size: 446px 563px;
    background-position: right 50px bottom;
    min-height: 550px;
  }

  ${StyledTitle} {
    padding-top: 100px;
    max-width: 600px;
  }
`;

const Description = styled.p`
  margin: 40px 0 0;
  font-size: 20px;
  line-height: 30px;
  color: #333333;
  max-width: 600px;
`;

export {
  StyledHero,
  Description
 };
