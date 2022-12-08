export const calculateIncreasedMeasurements = (input: Array<number>) => {
  let previousNumber = input[0];

  return input.reduce((sum, line, index) => {
    const number = line;

    if (index === 0) {
      previousNumber = number;
      return sum;
    }

    if (number > previousNumber) {
      previousNumber = number;
      return sum + 1;
    }

    previousNumber = number;
    return sum;
  }, 0);
};

export default (input: Array<string>) => {
  return calculateIncreasedMeasurements(input.map((line) => parseInt(line)));
};
