import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './core/components/appContainer/AppContainer';
import MainRoutes from './core/constants/mainRoutes';
import Header from './core/components/header/Header';
import Products from './pages/products/Products';

const App: React.FC = () => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('basket') || '[]');
    if (basket) {
      setBasket(items);
    }
  }, []);

  return (
    <AppContainer>
      <Header productsInBasketCount={basket.length} />
      <BrowserRouter>
        <Routes>
          <Route path={MainRoutes.main} element={<Products />} />
          <Route path={MainRoutes.login} element={<div>Login</div>} />
          <Route path={MainRoutes.registration} element={<div>Registration</div>} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};
export default App;
