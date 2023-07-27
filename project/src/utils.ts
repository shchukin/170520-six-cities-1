export function starsToPct(stars: number): string {
  return `${stars * 20}%`;
}


export const pluralize = (count: number, noun: string, suffix = 's') =>
  `${count} ${noun}${count !== 1 ? suffix : ''}`;
