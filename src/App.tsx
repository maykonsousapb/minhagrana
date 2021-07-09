import React from 'react';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './pages/Dashboard';

export const App = () => {
  return (
    <>
      <Dashboard />
      <GlobalStyle />
    </>
  );
};
