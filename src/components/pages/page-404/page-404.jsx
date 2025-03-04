import React from 'react';

import { Container } from '/src/components/layout/container/container';
import { Title } from '/src/components/ui/title/title';

const Page404 = () => {
  return (
    <Container>
      <Title
        level={1}
        size="big"
      >
        Страница не найдена. Код ошибки: 404.
      </Title>
    </Container>
  )
};

export { Page404 };
