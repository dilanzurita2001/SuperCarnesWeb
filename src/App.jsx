import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Wholesale from '@/pages/Wholesale';
import Calculator from '@/pages/Calculator';

function App() {
  return (
    <>
      <Helmet>
        <title>Super Carnes - Carnicería Premium en Valle de los Chillos</title>
        <meta name="description" content="Super Carnes ofrece los mejores cortes de carne premium, parrilladas y preparaciones especiales. Ubicados en Valle de los Chillos. Precios especiales para mayoristas." />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/mayoristas" element={<Wholesale />} />
            <Route path="/calculadora" element={<Calculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;