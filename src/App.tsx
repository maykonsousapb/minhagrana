import React from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './pages/Dashboard';
import { GlobalProvider } from './hooks/UseTransactions';

Modal.setAppElement('#root');
export const App = () => {
  return (
    <GlobalProvider>
      <Dashboard />
      <GlobalStyle />
    </GlobalProvider>
  );
};
