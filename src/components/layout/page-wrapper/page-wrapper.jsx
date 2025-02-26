import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '/src/components/layout/header/header';
import { Footer } from '/src/components/layout/footer/footer';

const PageWrapper = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
};

export { PageWrapper };
