import React from "react";
import { GlobalStyle } from './styles.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ScrollToTop } from "../blocks/scroll-to-top.jsx";
import { PageWrapper } from '/src/components/layout/page-wrapper/page-wrapper';
import { Index } from '/src/components/pages/index/index';
import { Order } from '/src/components/pages/order/order';
import { Page404 } from '/src/components/pages/page-404/page-404';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Index />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<Page404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
