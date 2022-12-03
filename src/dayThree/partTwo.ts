import { calculateScore } from './partOne';

export default (input: Array<string>): number => {
  const inputClean = input.filter(Boolean);

  let groups: Array<Array<string>> = [];

  for(let i = 0; i < inputClean.length; i += 3) {
    groups.push(inputClean.slice(i, i + 3));
  }

  const commonItems = groups.map(group => {
    const rucksackOne = group[0].split('');
    const rucksackTwo = group[1].split('');
    const rucksackThree = group[2].split('');

    let commonItem = '';
    for(let i = 0; i < rucksackOne.length; i += 1) {
      const item = rucksackOne[i];
      if (rucksackTwo.includes(item) && rucksackThree.includes(item)) {
        commonItem = item;
        break;
      }
    }

    return commonItem;
  });

  return calculateScore(commonItems);
};
