import React, { useEffect, useRef } from 'react';

import { Title } from '/src/components/ui/title/title';
import { CheckboxList } from '/src/components/blocks/checkbox-list/checkbox-list';
import { Button } from '/src/components/ui/button/button';
import { Counter } from '/src/components/blocks/counter/counter';

import {
  ProductsSection,
  OrderSection,
  StyledInput,
  StyledOrderForm
} from './styled';

const onProductChange = (
    index,
    setProducts
  ) => {
    setProducts((prevProductsState) => {
      const newProductsState = [...prevProductsState];
      newProductsState[index] = !newProductsState[index]; // Тогглить состояние чекбокса
      return newProductsState;
    });
};

const getSentence = (productsState, productsData) => {
  let newSentence = productsState.reduce((sentence, product, index) => {
    if (product) {
      return sentence + productsData[index].name + ', ';
    }
    return sentence;
  }, '');

  return newSentence.slice(0, -2);
};

const onOrderSubmit = (e, productsState, productsData, address, totalPrice) => {
  e.preventDefault();
  const orderText = `Вы заказали ${getSentence(productsState, productsData)} на адрес: ${address}. Стоимость заказа: ${totalPrice} руб.`;

  // Условная отправка заказа.
  alert(orderText);
};

const OrderForm = ({
  productsData,
  productsState,
  setProducts,
  address,
  setAddress,
  swiperRef
}) => {
  // Проверяем наличие выбранного хотябы одного продукта и заполненного поля адреса.
  const isSubmitEnabled = productsState.some((product) => product) && Boolean(address);

  // Создаем массив цен
  const prices = productsData.map((product) => product.price);

  // Сохраняю ссылку на предыдущее состояние.
  const prevProductsStateRef = useRef(productsState);

  // Сохраняю ссылку на цену
  const resultPrice = useRef(0);

  // Прокручиваю слайдер к выбраному продукту
  useEffect(() => {
    // Получаю индекс выбранного продукта
    const selectedIndex = productsState.findIndex((product, index) => {
      return product !== prevProductsStateRef.current[index] && product === true;
    })
    if(selectedIndex >= 0) {
      swiperRef.current.swiper.slideTo(selectedIndex);
    }
    prevProductsStateRef.current = productsState;
  }, [productsState]);

  return (
    <StyledOrderForm
      onSubmit={(e) => onOrderSubmit(e, productsState, productsData, address, resultPrice.current)}
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
        <Counter
          states={productsState}
          values={prices}
          resultPrice={resultPrice}
        />
        <Button
          type="submit"
          isDisabled={!isSubmitEnabled}
        >
          Заказать
        </Button>
      </OrderSection>
    </StyledOrderForm>
  )
};

export { OrderForm };
