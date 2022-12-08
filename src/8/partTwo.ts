import { getInlineTrees, getTreeGrid } from "./partOne";

const numberOfVisibleTrees = (trees: Array<number>, height: number): number => {
  let count = 0;

  for (let i = 0; i < trees.length; i += 1) {
    count += 1;
    if (trees[i] >= height) break;
  }

  return count;
};

const calculateTreeScenicScore = ({
  treeHeight,
  treesLeft,
  treesRight,
  treesAbove,
  treesBelow,
}: {
  treeHeight: number;
  treesLeft: Array<number>;
  treesRight: Array<number>;
  treesAbove: Array<number>;
  treesBelow: Array<number>;
}): number => {
  return (
    numberOfVisibleTrees(treesLeft, treeHeight) *
    numberOfVisibleTrees(treesRight, treeHeight) *
    numberOfVisibleTrees(treesAbove, treeHeight) *
    numberOfVisibleTrees(treesBelow, treeHeight)
  );
};

export default (input: Array<string>) => {
  const treeGrid = getTreeGrid(input);

  let currentScenicScore = 0;

  for (let i = 1; i < treeGrid.length - 1; i += 1) {
    for (let j = 1; j < treeGrid[i].length - 1; j += 1) {
      const inlineTrees = getInlineTrees(treeGrid, i, j);
      const scenicScore = calculateTreeScenicScore(inlineTrees);

      if (scenicScore > currentScenicScore) {
        currentScenicScore = scenicScore;
      }
    }
  }

  return currentScenicScore;
};
