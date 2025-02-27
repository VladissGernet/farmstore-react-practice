import React from 'react';

import { Checkbox } from '/src/components/ui/checkbox/checkbox';

const CheckboxList = ({
  productsData,
  productsState,
  onProductChange,
  setProducts
}) => (
    productsData?.length &&
    productsData.map((product, index) => (
      <Checkbox
        key={product.id}
        name='products'
        value={product.name}
        isChecked={productsState[index]}
        onChange={() => onProductChange(index, setProducts)}
      >
        {product.name}
      </Checkbox>
    ))
  );

export { CheckboxList };
