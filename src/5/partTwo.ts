import { parseStacks, parseInstructions, calculateTopStackValues } from './partOne';

export default (input: Array<string>) => {
  const orderedStacks = parseStacks(input);
  const instructions = parseInstructions(input);

 instructions.forEach(instruction => {
  const numberOfItemsToMove = parseInt(instruction[1]);
  const startStackIndex = parseInt(instruction[3]) - 1;
  const targetStackIndex = parseInt(instruction[5]) - 1;
  const startStackLength = orderedStacks[startStackIndex].length;
  const itemsToMove = orderedStacks[startStackIndex].slice(startStackLength - numberOfItemsToMove, startStackLength);
  const remainingItems = orderedStacks[startStackIndex].slice(0, startStackLength - numberOfItemsToMove);

  orderedStacks[startStackIndex] = remainingItems;
  orderedStacks[targetStackIndex] = orderedStacks[targetStackIndex].concat(itemsToMove);
 });

  return calculateTopStackValues(orderedStacks);
};
