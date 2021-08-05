import React from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';
import { Dashboard } from './pages/Dashboard';

Modal.setAppElement('#root');
export const App = () => {
  return (
    <>
      <Dashboard />
      <GlobalStyle />
    </>
  );
};
