export const formatCurrency = (currency) => {
  return currency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
