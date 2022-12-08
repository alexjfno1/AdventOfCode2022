import path from "path";
import log from "../../utils/log";
import { getFileLines } from "../../utils/loadInput";
import partOne from "./partOne";
import partTwo from "./partTwo";

const input = getFileLines(path.join(__dirname, "./input.txt"));
const partOneResult = partOne(input);
const partTwoResult = partTwo(input);

log(1, 1, partOneResult);
log(1, 2, partTwoResult);
