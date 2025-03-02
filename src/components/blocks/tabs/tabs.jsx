import React from 'react';

import { Button } from '/src/components/ui/button/button';

import { StyledTabs, StyledContent } from './styled';

const Tabs = () => {
  return (
    <StyledTabs>
      <Button>Tab 1</Button>
      <Button>Tab 2</Button>
      <Button>Tab 3</Button>
      <StyledContent>content</StyledContent>
    </StyledTabs>
  )

};

export { Tabs };
