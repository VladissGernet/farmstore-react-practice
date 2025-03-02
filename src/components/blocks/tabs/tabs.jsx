import React, { useState } from 'react';

import { Button } from '/src/components/ui/button/button';

import { StyledTabs, StyledContent } from './styled';

const Tabs = ({data}) => {
  if (data?.length === false) {
    return null;
  }

  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledTabs>
      {
        data.map((tab, index) => {
          return (
            <Button
              key={tab.title}
              isDisabled={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </Button>
          )
        })
      }
      <StyledContent>
        {data[activeTab].content}
      </StyledContent>
    </StyledTabs>
  )

};

export { Tabs };
