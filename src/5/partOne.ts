export const parseStacks = (input: Array<string>) => {
  let stacks = [];
  for(let i = 0; i <= input.length; i += 1) {
    if (input[i].includes('1')) break;
    stacks.push(input[i]);
  }

  const mappedStacks = stacks.map(stack => {
    return stack
    .replace(/^\s\s\s\s/, 'E ')
    .replace(/\s\s\s\s$/, ' E')
    .replace(/\s\s\s\s/g, ' E')
    .split(' ');
  });

  const numberOfStacks = mappedStacks[0].length;
  const numberOfRows = mappedStacks.length;

  let orderedStacks: Array<Array<string>> = [];
  for(let i = 0; i < numberOfStacks; i += 1) {
    const stack = [];
    for(let j = 0; j < numberOfRows; j += 1) {
      stack.push(mappedStacks[j][i]);
    }
    orderedStacks.push(stack.reverse().filter(s => s !== 'E'))
  }

  return orderedStacks;
};

export const parseInstructions = (input: Array<string>) => {
  let instructions: Array<Array<string>> = [];
  input.forEach((line) => {
    if (line.startsWith('move')) {
    instructions.push(line.split(' '));
    }
  })

  return instructions;
};

export const calculateTopStackValues = (stacks: Array<Array<string>>) => stacks.reduce((letters, stack) => {
  return letters + (stack[stack.length - 1][1]);
 }, '');

export default (input: Array<string>) => {
  const orderedStacks = parseStacks(input);
  const instructions = parseInstructions(input);

 instructions.forEach(instruction => {
  const numberOfItemsToMove = parseInt(instruction[1]);
  const startStackIndex = parseInt(instruction[3]) - 1;
  const targetStackIndex = parseInt(instruction[5]) - 1;

  for(let i = 0; i < numberOfItemsToMove; i += 1) {
    const item = orderedStacks[startStackIndex].pop() as string;
    orderedStacks[targetStackIndex].push(item);
  }
 });

  return calculateTopStackValues(orderedStacks);
};
