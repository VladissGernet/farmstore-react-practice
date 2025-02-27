import React, { useState } from 'react';

// Mock Data
import { productsData } from '/src/mocks/products-data';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';
import { CheckboxList } from '/src/components/blocks/checkbox-list/checkbox-list';
import { Button } from '/src/components/ui/button/button';

import {
  StyledOrder,
  ProductsSection,
  OrderSection,
  StyledInput
 } from './styled';

const onProductChange = (index, setProducts) => {
  setProducts((prevProductsState) => {
    const newProductsState = [...prevProductsState];
    newProductsState[index] = !newProductsState[index]; // Тогглить состояние чекбокса
    return newProductsState;
  });
};

const Order = () => {
  if (productsData?.length === false) {
    return null;
  }

  const [productsState, setProducts] = useState(Array(productsData.length).fill(false));
  const [address, setAddress] = useState('');

  // Проверяем наличие выбранного хотябы одного продукта и заполненного поля адреса.
  const isSubmitEnabled = productsState.some((product) => product) && Boolean(address);

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
          <ProductsSection>
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
          </ProductsSection>
          <OrderSection>
            <Title
              level={2}
              size="small"
            >
              Сделать заказ
            </Title>
            <StyledInput
              type="text"
              placeholder="Введите адрес доставки"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Button
              type="submit"
              isDisabled={!isSubmitEnabled}
            >
              Заказать
            </Button>
          </OrderSection>
        </form>
      </Container>
    </StyledOrder>
  )
};

export { Order };
