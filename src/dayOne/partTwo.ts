import { calculateTotals } from "./partOne";

export default (input: Array<string>): number => {
  const totals = calculateTotals(input);
  const sortedNumbers = totals.sort((a, b) => b - a);
  const topThreeSum = sortedNumbers[0] + sortedNumbers[1] + sortedNumbers[2];

  return topThreeSum;
};
