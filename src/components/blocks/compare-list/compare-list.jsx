import React from 'react';

// Mock Data
import { compareListData } from '/src/mocks/compare-list-data';

import { Ul } from 'src/components/styled';
import { CompareItem } from '/src/components/blocks/compare-item/compare-item';

const CompareList = () => {
  return (
    <>
      <Ul>
        {
          compareListData.farm &&
          compareListData.farm.length &&
          compareListData.farm.map((item) => (
            <CompareItem key={item.title} item={item} type="farm"/>
          ))
        }
      </Ul>
      <Ul>
        {
          compareListData.store &&
          compareListData.store.length &&
          compareListData.store.map((item) => (
            <CompareItem key={item.title} item={item} type="store"/>
          ))
        }
      </Ul>
    </>
  )
};

export { CompareList };
