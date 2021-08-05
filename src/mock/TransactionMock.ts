import { createServer, Model } from 'miragejs';

export const transactionMock = createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          type: 'deposit',
          category: 'Salário',
          amount: 6000,
          createdAt: '2021-04-04 09:00',
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Despesas Fixas',
          amount: 1250,
          createdAt: '2021-04-18 11:00',
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', {
        ...data,
        createdAt: new Date(),
      });
    });
  },
});
