const isCd = (line: string): boolean => line.startsWith("$ cd");
const isFile = (line: string): boolean => !!line.match(/^[1-9]/);

export const getDirSizeMap = (
  input: Array<string>
): { [key: string]: number } => {
  let currentDir: Array<string> = [];
  let dirs: { [key: string]: number } = {};

  input.forEach((line) => {
    if (isCd(line)) {
      const dirName = line.split(" ")[2];

      if (dirName === "/") {
        currentDir = ["/"];
      } else if (dirName === "..") {
        currentDir.pop();
      } else {
        currentDir.push(`${dirName}/`);
      }
    }

    if (isFile(line)) {
      const [fileSize] = line.split(" ");

      currentDir.forEach((_, index) => {
        const dirPath = currentDir.slice(0, index + 1).join("");

        if (dirs[dirPath]) {
          dirs[dirPath] = dirs[dirPath] + parseInt(fileSize);
        } else {
          dirs[dirPath] = parseInt(fileSize);
        }
      });
    }
  });

  return dirs;
};

export default (input: Array<string>) => {
  const dirs = getDirSizeMap(input);

  return Object.keys(dirs).reduce((sum, dirKey) => {
    const dirSize = dirs[dirKey];

    if (dirSize <= 100000) {
      return sum + dirSize;
    }

    return sum;
  }, 0);
};
