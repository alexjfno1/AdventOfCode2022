import { getDirSizeMap } from "./partOne";

const TOTAL_DISK_SPACE = 70000000;
const UPDATE_SPACE = 30000000;

export default (input: Array<string>) => {
  const dirs = getDirSizeMap(input);
  const totalSpaceNeeded = UPDATE_SPACE - (TOTAL_DISK_SPACE - dirs["/"]);

  let smallestDir = TOTAL_DISK_SPACE;
  Object.keys(dirs).forEach((dirKey) => {
    if (dirs[dirKey] > totalSpaceNeeded && dirs[dirKey] < smallestDir) {
      smallestDir = dirs[dirKey];
    }
  });

  return smallestDir;
};
