import styled from 'styled-components';

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

  ${(props) => props.$type && `background-color: ${backgroundTypeColor[props.$type].item};`};

  &::before {
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
    content: ${(props) => backgroundTypeColor[props.$type] ? `"${backgroundTypeColor[props.$type].labelContent}"` : "''"};
    padding: 5px;
    display: inline-block;
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => backgroundTypeColor[props.$type].label};
  }
`;

export {
  StyledItem
 };
