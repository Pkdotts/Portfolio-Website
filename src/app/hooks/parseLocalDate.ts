export function parseLocalDate(dateStr: string | null) {
  if (!dateStr) return null;

  const d = new Date(dateStr);
  const newD = new Date(
    d.getUTCFullYear(),
    d.getUTCMonth(),
    d.getUTCDate()
  );
  
  return normalizeDate(newD);
}


export function normalizeDate(d?: Date | null) {
  if (!d) return undefined;
  return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
}
