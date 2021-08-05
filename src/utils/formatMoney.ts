export const formatMoney = (value: number) => {
  const moneyFromated = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return moneyFromated;
};
