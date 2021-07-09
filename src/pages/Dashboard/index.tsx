import React from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionsTable } from '../../components/TransactionsTable';
import { Main } from './styles';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <Summary />
        <TransactionsTable />
      </Main>
    </>
  );
};
