import path from "path";
import log from "./src/utils/log";
import { getFileLines } from "./src/utils/loadInput";
import yargs from "yargs/yargs";

const run = async () => {
  const argv = await yargs(process.argv.slice(2)).options({
    year: { type: "number", demandOption: true },
    day: { type: "number", demandOption: true },
  }).argv;

  const year = argv.year;
  const day = argv.day;

  const { default: partOne } = require(`./src/${year}/${day}/partOne`);
  const { default: partTwo } = require(`./src/${year}/${day}/partTwo`);
  const input = getFileLines(
    path.join(__dirname, `./src/${year}/${day}/input.txt`)
  );

  const partOneResult = partOne(input);
  const partTwoResult = partTwo(input);

  log(day, 1, partOneResult);
  log(day, 2, partTwoResult);
};

run().then(() => console.log("DONE"));
