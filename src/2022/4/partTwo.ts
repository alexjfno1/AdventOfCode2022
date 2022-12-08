import { splitAssignment } from './partOne';

const isBetween = (start: number, end: number, test: number): boolean => {
  return test >= start && test <= end; 
}

const hasOverlap = (assignment:string): boolean => {
  const [elfOneStartNum, elfOneEndNum, elfTwoStartNum, elfTwoEndNum] = splitAssignment(assignment);

  if(
    isBetween(elfTwoStartNum, elfTwoEndNum, elfOneStartNum) ||
    isBetween(elfTwoStartNum, elfTwoEndNum, elfOneEndNum) || 
    isBetween(elfOneStartNum, elfOneEndNum, elfTwoStartNum) ||
    isBetween(elfOneStartNum, elfOneEndNum, elfTwoEndNum)
  ) {
    return true;
  }

  return false;
};

export default (input: Array<string>) => {
  return input.filter(Boolean).reduce((sum, line) => {
    if (hasOverlap(line)) {
      return sum + 1;
    }

    return sum;
  }, 0);
};
