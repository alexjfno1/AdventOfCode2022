import {
  calculateHead,
  calculateTail,
  calculateTouchedCoordinates,
} from "./partOne";

export default (input: Array<string>): number => {
  let tailCoordinates: Array<string> = [];
  let currentHeadPosition: { x: number; y: number } = { x: 0, y: 0 };
  let tails: Array<{ x: number; y: number }> = new Array(2).fill({
    x: 0,
    y: 0,
  });

  input.forEach((line) => {
    const [direction, steps] = line.split(" ");
    const numOfSteps = parseInt(steps);

    for (let i = 0; i < numOfSteps; i += 1) {
      //console.log("START HEAD", tails[0]);

      currentHeadPosition = calculateHead(direction, currentHeadPosition);

      console.log(
        "TAILS",
        tails[0],
        tails[1],
        "===",
        calculateTail(direction, tails[0], tails[1])
      );

      for (let i = 0; i < tails.length; i += 1) {
        tails[i] = calculateTail(
          direction,
          tails[i - 1] ?? currentHeadPosition,
          tails[i]
        );
      }

      console.log(tails);

      tailCoordinates.push(
        `${tails[tails.length - 1].x},${tails[tails.length - 1].y}`
      );
    }

    console.log("==================================");
  });

  return calculateTouchedCoordinates(tailCoordinates);
};
