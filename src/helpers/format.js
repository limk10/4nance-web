export const formatCurrency = (currency) => {
  const _currency = parseFloat(currency);
  return _currency.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};


export const clearSpecialCharacters = (string) => {
  if (!string) return '-'
  return string.replace(/[^\w\s]/gi, "").replaceAll(' ', '')
}