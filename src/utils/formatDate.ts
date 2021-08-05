export const formatDate = (date: string) => {
  const dateFormated = new Intl.DateTimeFormat('pt-BR').format(new Date(date));
  return dateFormated;
};
