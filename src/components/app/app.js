import React from "react";
import { GlobalStyle } from './styles.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ScrollToTop } from "../blocks/scroll-to-top.jsx";
import { PageWrapper } from '/src/components/layout/page-wrapper/page-wrapper';
import { Index } from '/src/components/pages/index/index';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Index />} />
          <Route path="about" element={<h1>About</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
