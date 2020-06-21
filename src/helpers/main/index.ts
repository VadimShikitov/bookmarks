export const generateID = (): string =>
  '_' + Math.random().toString(36).substr(2, 9);

export const createNowDate = (): string =>
  new Date().toLocaleTimeString().slice(0, -3);
