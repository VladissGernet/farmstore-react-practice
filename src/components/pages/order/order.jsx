import React, { useState } from 'react';

// Mock Data
import { productsData } from '/src/mocks/products-data';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';
import { Checkbox } from '/src/components/ui/checkbox/checkbox';

import { StyledOrder } from './styled';

const onProductChange = (e, index, productsState, setProducts) => {
  const newProductsState = [...productsState];
  newProductsState[index] = e.target.checked;
  setProducts(newProductsState);
};

const Order = () => {
  const [productsState, setProducts] = useState(Array(productsData.length).fill(false));

  return (
    <StyledOrder>
      <Container>
        <Title
          level={1}
          size="big"
        >
          Закажите доставку
        </Title>
        {
          productsData &&
          productsData.length &&
          productsData.map((product, index) => (
            <Checkbox
              key={product.id}
              name='products'
              value={product.name}
              isChecked={productsState[index]}
              onChange={(e) => onProductChange(e, index, productsState, setProducts)}
            >
              {product.name}
            </Checkbox>
          ))
        }
      </Container>
    </StyledOrder>
  )
};

export { Order };
