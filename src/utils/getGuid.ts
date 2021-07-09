export const getGuid = (prefix = "") =>
  prefix + Math.random().toString(16).slice(2);
