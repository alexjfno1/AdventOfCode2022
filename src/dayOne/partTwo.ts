import path from "path";
import log from "../utils/log";
import { getFileLines } from "../utils/loadInput";

const input = getFileLines(path.join(__dirname, "./input.txt"));

let totals: Array<number> = [];
let currentCount = 0;

input.forEach((line) => {
  const number = parseInt(line);

  if (Number.isNaN(number)) {
    totals.push(currentCount);
    currentCount = 0;
  } else {
    currentCount = currentCount + number;
  }
});

const sortedNumbers = totals.sort((a, b) => b - a);
const topThreeSum = sortedNumbers[0] + sortedNumbers[1] + sortedNumbers[2];

log(topThreeSum);
