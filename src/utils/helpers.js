export const getToday = function (options = {}) {
  const today = new Date();
  if (options?.end) today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value, currency) =>
  new Intl.NumberFormat('en', { style: 'currency', currency: currency }).format(
    value,
  );

export const formatDate = (date) => new Date(date).toLocaleString('hr-HR');
