import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '/src/components/layout/header/header';
import { Footer } from '/src/components/layout/footer/footer';
import { Main } from './styled';

const PageWrapper = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
};

export { PageWrapper };
