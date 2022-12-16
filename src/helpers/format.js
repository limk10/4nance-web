export const formatCurrency = (currency) => {
  const _currency = parseFloat(currency);
  return _currency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
