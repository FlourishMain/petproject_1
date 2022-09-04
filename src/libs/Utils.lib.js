const keyGen = (delimiter = 5) => {
  return `${Number(Math.random() * Math.random()).toFixed(delimiter)}`;
};

export { keyGen };
