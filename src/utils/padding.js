export const padStart = (string, fillString, maxLength) => {
  if (typeof string !== 'string') {
    string = string.toString();
  }
  return string.padStart(maxLength, fillString);
};

export const padEnd = (string, fillString, maxLength) => {
  if (typeof string !== 'string') {
    string = string.toString();
  }
  return string.padEnd(maxLength, fillString);
};
