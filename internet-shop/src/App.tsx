import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './core/components/appContainer/AppContainer';
import Main from './pages/main/Main';
import MainRoutes from './core/constants/mainRoutes';

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => (
  <AppContainer>
    <BrowserRouter>
      <Routes>
        <Route path={MainRoutes.main} element={<Main />} />
        <Route path={MainRoutes.login} element={<div>Login</div>} />
        <Route path={MainRoutes.registration} element={<div>Registration</div>} />
      </Routes>
    </BrowserRouter>
  </AppContainer>
);
export default App;
