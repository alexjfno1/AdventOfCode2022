import fs from "fs";

export const getFileLines = (filePath: string): Array<string> => {
  const fileContents = fs.readFileSync(filePath).toString();
  return fileContents.split("\n");
};
