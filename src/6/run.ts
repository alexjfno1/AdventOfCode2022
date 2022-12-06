import path from "path";
import log from "../utils/log";
import { getFileLines } from "../utils/loadInput";
import partOne from "./partOne";
import partTwo from "./partTwo";

const input = getFileLines(path.join(__dirname, "./input.txt"));
const partOneResult = partOne(input.toString());
const partTwoResult = partTwo(input.toString());

log(6, 1, partOneResult);
log(6, 2, partTwoResult);
