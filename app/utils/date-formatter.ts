const LOCALE = 'en-US';

export function formatDate(date: Date): string {
  return Intl.DateTimeFormat(LOCALE, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}
