import React from 'react';

import { Title } from '/src/components/ui/title/title';
import { StyledItem, Description } from './styled';

const CompareItem = ({item, type}) => (
  <StyledItem $icon={item.icon} $type={type}>
    <Title
      level={3}
      size="small"
    >
      {item.title}
    </Title>
    <Description>
      {item.description}
    </Description>
  </StyledItem>
);

export { CompareItem };
