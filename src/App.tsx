import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";

import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import SmoothScrollLayout from "./components/SmoothScrollLayout.tsx";
import HomePage from './page/HomePage.tsx';
import ProductPage from './page/ProductPage.tsx';


const PageWrapper = (comp : any) => (
  <SmoothScrollLayout >
    <main className="min-h-screen w-full relative bg-light">
      {comp}
    </main>
    <Footer />
  </SmoothScrollLayout>
);

const ProductsPage = () => (
  <div className="min-h-screen w-full bg-light">
    <ProductPage />
  </div>
);

const NotFoundPage = () => (
  <div className="min-h-screen w-full flex items-center justify-center">
    <p className="text-lg">404 – Page not found</p>
  </div>
);

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    // Only reset on path change (ignore in-page hash jumps like /#products)
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={PageWrapper(<HomePage />)} />
        <Route path="/products/:productId" element={PageWrapper(<ProductsPage />)} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
