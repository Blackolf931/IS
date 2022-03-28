import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContainer from './core/components/appContainer/AppContainer';
import Main from './pages/main/Main';

// eslint-disable-next-line react/function-component-definition
const App: React.FC = () => (
  <AppContainer>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  </AppContainer>
);
export default App;
