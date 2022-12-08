export const calculateTotals = (input: Array<string>): Array<number> => {
  let totals: Array<number> = [];
  let currentCount = 0;

  input.forEach((line, index) => {
    const number = parseInt(line);

    if (Number.isNaN(number)) {
      totals.push(currentCount);
      currentCount = 0;
    } else {
      currentCount = currentCount + number;
    }

    if (index === input.length - 1) {
      totals.push(currentCount);
    }
  });

  return totals;
};

export default (input: Array<string>) => {
  return Math.max(...calculateTotals(input));
};
