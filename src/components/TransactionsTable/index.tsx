import React, { useEffect, useState } from 'react';
import { Container } from './styles';

export const TransactionsTable = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(data => data.json())
      .then(data => console.log(data));
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
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="income">RS 5.000,00</td>
            <td>Job</td>
            <td>21/05/2021</td>
          </tr>
          <tr>
            <td>Supermercado</td>
            <td className="outcome">- RS 800,00</td>
            <td>Despesas fixas</td>
            <td>21/05/2021</td>
          </tr>
          <tr>
            <td>Monitor</td>
            <td className="outcome">- RS 1.300,00</td>
            <td>Job</td>
            <td>21/05/2021</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className="income">RS 6.000,00</td>
            <td>Salário</td>
            <td>30/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
