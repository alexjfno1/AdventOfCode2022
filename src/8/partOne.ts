export const getTreeGrid = (input: Array<string>) =>
  input.map((line) => line.split("").map((num) => parseInt(num)));

export const getInlineTrees = (
  treeGrid: number[][],
  columnIndex: number,
  rowIndex: number
) => {
  const treeHeight = treeGrid[columnIndex][rowIndex];
  const verticalTrees = treeGrid.map((row) => row[rowIndex]);
  const treesLeft = treeGrid[columnIndex].slice(0, rowIndex).reverse();
  const treesRight = treeGrid[columnIndex].slice(
    rowIndex + 1,
    treeGrid[columnIndex].length
  );
  const treesAbove = verticalTrees.slice(0, columnIndex).reverse();
  const treesBelow = verticalTrees.slice(columnIndex + 1, verticalTrees.length);

  return { treeHeight, treesLeft, treesRight, treesAbove, treesBelow };
};

const isHidden = (trees: Array<number>, height: number): boolean => {
  for (let i = 0; i < trees.length; i += 1) {
    if (trees[i] >= height) {
      return true;
    }
  }

  return false;
};

export default (input: Array<string>) => {
  const treeGrid = getTreeGrid(input);

  const numberOfEdgeTrees = (treeGrid.length + treeGrid[0].length - 2) * 2;
  let visibleTrees = numberOfEdgeTrees;

  for (let i = 1; i < treeGrid.length - 1; i += 1) {
    for (let j = 1; j < treeGrid[i].length - 1; j += 1) {
      const { treeHeight, treesLeft, treesRight, treesAbove, treesBelow } =
        getInlineTrees(treeGrid, i, j);

      if (
        !isHidden(treesLeft, treeHeight) ||
        !isHidden(treesRight, treeHeight) ||
        !isHidden(treesAbove, treeHeight) ||
        !isHidden(treesBelow, treeHeight)
      ) {
        visibleTrees += 1;
      } else {
      }
    }
  }

  return visibleTrees;
};
