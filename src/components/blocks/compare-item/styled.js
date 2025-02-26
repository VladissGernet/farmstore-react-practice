import styled from 'styled-components';

import { StyledTitle } from '/src/components/ui/title/styled';

const backgroundTypeColor = {
  "farm": {
    item: "#e1edce",
    label: "#88aa4d",
    labelContent: "Фермерские продукты"
  },
  "store": {
    item: "#f8ddd7",
    label: "#f75531",
    labelContent: "Магазинные продукты"
  }
}

const StyledItem = styled.li`
  padding: 20px;

  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 0 20px;
  grid-template-areas:
    'icon label'
    'icon title'
    'description description';

  ${(props) => props.$type && `background-color: ${backgroundTypeColor[props.$type].item};`};

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &::before {
    grid-area: icon;

    content: "";
    width: 56px;
    height: 56px;
    display: block;

    ${(props) => `background-image: url(${props.$icon});`}
    background-repeat: no-repeat;
    background-size: 56px 56px;
    background-position: center;
  }

  &::after {
    grid-area: label;
    justify-self: start;

    content: ${(props) => backgroundTypeColor[props.$type] ? `"${backgroundTypeColor[props.$type].labelContent}"` : "''"};
    padding: 5px;
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => backgroundTypeColor[props.$type].label};
  }

  ${StyledTitle} {
    grid-area: title;
  }
`;

const Description = styled.p`
  grid-area: description;

  margin: 20px 0 0;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;

export {
  StyledItem,
  Description
 };
