import React, { useState } from 'react';

// Mock Data
import { productsData } from '/src/mocks/products-data';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';
import { Checkbox } from '/src/components/ui/checkbox/checkbox';

import { StyledOrder } from './styled';

const onProductChange = (index, setProducts) => {
  setProducts((prevProductsState) => {
    const newProductsState = [...prevProductsState];
    newProductsState[index] = !newProductsState[index]; // Тогглить состояние чекбокса
    return newProductsState;
  });
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
        }
      </Container>
    </StyledOrder>
  )
};

export { Order };
