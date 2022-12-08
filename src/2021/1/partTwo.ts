import { calculateIncreasedMeasurements } from "./partOne";

export default (input: Array<string>): number => {
  let groupedMeasurements: Array<number> = [];
  for (let i = 0; i < input.length - 2; i += 1) {
    groupedMeasurements.push(
      input.slice(i, i + 3).reduce((sum, num) => sum + parseInt(num), 0)
    );
  }

  return calculateIncreasedMeasurements(groupedMeasurements);
};
