export const calculateHead = (
  direction: string,
  headPosition: { x: number; y: number }
): { x: number; y: number } => {
  const newHeadPosition: { x: number; y: number } = { ...headPosition };

  if (direction === "U") {
    newHeadPosition.y += 1;
  } else if (direction === "D") {
    newHeadPosition.y -= 1;
  } else if (direction === "L") {
    newHeadPosition.x -= 1;
  } else if (direction === "R") {
    newHeadPosition.x += 1;
  }

  return newHeadPosition;
};

export const calculateTail = (
  direction: string,
  headPosition: { x: number; y: number },
  tailPosition: { x: number; y: number }
): { x: number; y: number } => {
  const newTailPosition: { x: number; y: number } = { ...tailPosition };

  if (tailPosition.x === headPosition.x && tailPosition.y == headPosition.y) {
    return newTailPosition;
  }

  if (
    tailPosition.x < headPosition.x - 1 ||
    tailPosition.x > headPosition.x + 1 ||
    tailPosition.y < headPosition.y - 1 ||
    tailPosition.y > headPosition.y + 1
  ) {
    if (direction === "U") {
      if (tailPosition.x !== headPosition.x) {
        newTailPosition.x = headPosition.x;
      }
      newTailPosition.y += 1;
    } else if (direction === "D") {
      if (tailPosition.x !== headPosition.x) {
        newTailPosition.x = headPosition.x;
      }
      newTailPosition.y -= 1;
    } else if (direction === "L") {
      if (tailPosition.y !== headPosition.y) {
        newTailPosition.y = headPosition.y;
      }
      newTailPosition.x -= 1;
    } else if (direction === "R") {
      if (tailPosition.y !== headPosition.y) {
        newTailPosition.y = headPosition.y;
      }
      newTailPosition.x += 1;
    }
  }

  return newTailPosition;
};

export const calculateTouchedCoordinates = (tailCoordinates: Array<string>) =>
  tailCoordinates.reduce<Array<string>>((coords, nextCoord) => {
    if (!coords.includes(nextCoord)) {
      coords.push(nextCoord);
    }

    return coords;
  }, []).length;

export default (input: Array<string>): number => {
  let tailCoordinates: Array<string> = [];
  let currentHeadPosition: { x: number; y: number } = { x: 0, y: 0 };
  let currentTailPosition: { x: number; y: number } = { x: 0, y: 0 };

  input.forEach((line) => {
    const [direction, steps] = line.split(" ");
    const numOfSteps = parseInt(steps);

    for (let i = 0; i < numOfSteps; i += 1) {
      currentHeadPosition = calculateHead(direction, currentHeadPosition);
      currentTailPosition = calculateTail(
        direction,
        currentHeadPosition,
        currentTailPosition
      );
      tailCoordinates.push(`${currentTailPosition.x},${currentTailPosition.y}`);
    }
  });

  return calculateTouchedCoordinates(tailCoordinates);
};
