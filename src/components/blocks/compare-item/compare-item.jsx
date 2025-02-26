import React from 'react';

import { Title } from '/src/components/ui/title/title';
import { StyledItem } from './styled';

const CompareItem = ({item, type}) => (
  <StyledItem $icon={item.icon} $type={type}>
    <Title
      level={3}
      size="small"
    >
      {item.title}
    </Title>
    <p>
      {item.description}
    </p>
  </StyledItem>
);

export { CompareItem };
