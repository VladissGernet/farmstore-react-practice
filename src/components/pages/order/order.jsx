import React, { useState } from 'react';

// Mock Data
import { productsData } from '/src/mocks/products-data';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';
import { CheckboxList } from '/src/components/blocks/checkbox-list/checkbox-list';

import { StyledOrder, OrderSection } from './styled';

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

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Заказ отправлен');
          }}
        >
          <OrderSection>
            <Title
              level={2}
              size="small"
            >
              Выберите продукты
            </Title>
            <CheckboxList
            productsData={productsData}
            productsState={productsState}
            onProductChange={onProductChange}
            setProducts={setProducts}
            />
          </OrderSection>
          <button type="submit">Заказать</button>
        </form>
      </Container>
    </StyledOrder>
  )
};

export { Order };
