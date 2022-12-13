export default (input: Array<string>): number => {
  let grid: Array<Array<string>> = [["S"]];
  const currentPositon: { x: number; y: number } = { x: 0, y: 0 };

  input.forEach((line) => {
    const [direction, steps] = line.split(" ");
    const numOfSteps = parseInt(steps);

    grid[currentPositon.y][currentPositon.x] = ".";

    if (direction === "L") {
      if (currentPositon.x < numOfSteps) {
        const newGridSpaces = new Array(numOfSteps - currentPositon.x).fill(
          "."
        );

        grid = [
          ...grid.slice(0, currentPositon.y),
          [...newGridSpaces, ...grid[currentPositon.y]],
          ...grid.slice(currentPositon.y + 1, grid[currentPositon.y].length),
        ] as string[][];

        currentPositon.x += newGridSpaces.length;
      }

      currentPositon.x -= numOfSteps;
    }

    if (direction === "R") {
      if (grid[currentPositon.y].length - currentPositon.x + 1 < numOfSteps) {
        const newGridSpaces = new Array(
          numOfSteps - grid[currentPositon.y].length - currentPositon.x + 1
        ).fill(".");

        grid = [
          ...grid.slice(0, currentPositon.y),
          [...grid[currentPositon.y], ...newGridSpaces],
          ...grid.slice(currentPositon.y + 1, grid[currentPositon.y].length),
        ] as string[][];
      }

      currentPositon.x += numOfSteps;
    }

    if (direction === "U") {
      if (currentPositon.y < numOfSteps) {
        const newGridSpaces = new Array(numOfSteps - currentPositon.y).fill(
          "."
        );

        grid = [newGridSpaces, ...grid] as string[][];

        currentPositon.y += newGridSpaces.length;
      }

      currentPositon.y -= numOfSteps;
    }

    if (direction === "D") {
      if (grid.length - currentPositon.y - 1 < numOfSteps) {
        const newGridSpaces = new Array(
          currentPositon.y + 1 + numOfSteps - grid.length
        ).fill(new Array(grid[currentPositon.y].length).fill("."));

        grid.push(...newGridSpaces);
      }

      currentPositon.y += numOfSteps;
    }

    grid[currentPositon.y][currentPositon.x] = "H";
  });

  console.log(grid.map((r) => r.join("")).join("\n"));

  return 1;
};
