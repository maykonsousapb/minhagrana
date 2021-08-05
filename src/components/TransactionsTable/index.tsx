import React, { useEffect, useState } from 'react';
import { api } from '../../api/api';
import { formatDate } from '../../utils/formatDate';
import { formatMoney } from '../../utils/formatMoney';
import { Container } from './styles';

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(transactions) &&
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {formatMoney(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate(transaction.createdAt)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};
