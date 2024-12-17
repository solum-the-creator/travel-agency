export const formatFullDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    year: 'numeric',
    month: 'short',
  }).format(date);
};
