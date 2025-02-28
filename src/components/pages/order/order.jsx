import React, { useState } from 'react';

// Mock Data
import { productsData } from '/src/mocks/products-data';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';
import { OrderForm } from '/src/components/blocks/order-form/order-form';
import { Goods } from '/src/components/blocks/goods/goods';

import {
  StyledOrder,
} from './styled';

const Order = () => {
  if (productsData?.length === false) {
    return null;
  }

  const [productsState, setProducts] = useState(Array(productsData.length).fill(false));
  const [address, setAddress] = useState('');

  return (
    <StyledOrder>
      <Container>
        <Title
          level={1}
          size="big"
        >
          Закажите доставку
        </Title>
        <OrderForm
          productsData={productsData}
          productsState={productsState}
          setProducts={setProducts}
          address={address}
          setAddress={setAddress}
        />
        <Goods goods={productsData} />
      </Container>
    </StyledOrder>
  )
};

export { Order };
