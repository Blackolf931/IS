import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './core/components/appContainer/AppContainer';
import MainRoutes from './core/constants/mainRoutes';
import Header from './core/components/header/Header';
import Products from './pages/products/Products';
import Basket from './pages/basket/Basket';

const App: React.FC = () => {
  const [basket, setBasket] = useState([]);

  const getBasketItem = useCallback(() => {
    const items = JSON.parse(localStorage.getItem('basket') || '[]');
    if (basket) {
      setBasket(items);
    }
  }, []);

  useEffect(() => {
    getBasketItem();
  }, []);

  return (
    <AppContainer>
      <BrowserRouter>
        <Header productsInBasketCount={basket.length} />
        <Routes>
          <Route path={MainRoutes.main} element={<Products />} />
          <Route path={MainRoutes.login} element={<div>Login</div>} />
          <Route path={MainRoutes.registration} element={<div>Registration</div>} />
          <Route path={MainRoutes.basket} element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};
export default App;
