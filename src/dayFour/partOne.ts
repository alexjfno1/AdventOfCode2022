export const splitAssignment = (assignment: string): [number, number, number, number] => {
    const [elfOne, elfTwo] = assignment.split(',');
    const [elfOneStart, elfOneEnd] = elfOne.split('-');
    const [elfTwoStart, elfTwoEnd] = elfTwo.split('-');
    const elfOneStartNum = parseInt(elfOneStart);
    const elfOneEndNum = parseInt(elfOneEnd);
    const elfTwoStartNum = parseInt(elfTwoStart);
    const elfTwoEndNum = parseInt(elfTwoEnd);

  return [elfOneStartNum, elfOneEndNum, elfTwoStartNum, elfTwoEndNum];
};

const hasFullyContained = (assignment:string): boolean => {
  const [elfOneStartNum, elfOneEndNum, elfTwoStartNum, elfTwoEndNum] = splitAssignment(assignment);

  if ((elfOneStartNum >= elfTwoStartNum) && (elfOneEndNum <= elfTwoEndNum)) {
    return true;
  } else if ((elfTwoStartNum >= elfOneStartNum) && (elfTwoEndNum <= elfOneEndNum))  {
    return true;
  }

  return false;
};

export default (input: Array<string>) => {
  return input.filter(Boolean).reduce((sum, line) => {
    if (hasFullyContained(line)) {
      return sum + 1;
    }

    return sum;
  }, 0);
};
