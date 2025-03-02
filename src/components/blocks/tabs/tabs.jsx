import React from 'react';

import { Button } from '/src/components/ui/button/button';

import { StyledTabs, StyledContent } from './styled';

const Tabs = ({data}) => {
  if (data?.length === false) {
    return null;
  }

  // Добавить useState

  console.log(data[0].content);


  return (
    <StyledTabs>
      {
        data.map((tab) => {
          return (
            <Button
              key={tab.title}
            >
              {tab.title}
            </Button>
          )
        })
      }
      <StyledContent>
        {data[2].content}
      </StyledContent>
    </StyledTabs>
  )

};

export { Tabs };
