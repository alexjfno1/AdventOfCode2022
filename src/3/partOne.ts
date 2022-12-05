const getRucksackContents = (line: string): [Array<string>,Array<string>] => {
  const size = line.length;
  const compartmentOne = line.slice(0, size / 2).split('');
  const compartmentTwo = line.slice(size / 2, size).split('');

  return [compartmentOne, compartmentTwo]
}

const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const combinedAlphabet = lowercaseAlphabet + uppercaseAlphabet;

const getAlphabetPosition = (letter: string) => 
  combinedAlphabet.split('').indexOf(letter) + 1

export const calculateScore = (items: Array<string>): number =>  items.reduce((sum, letter) => 
    sum + getAlphabetPosition(letter)
  , 0)

export default (input: Array<string>): number => {
  const duplicateItems = input.map((line) => {
    const [compartmentOne, compartmentTwo] = getRucksackContents(line);

    return compartmentOne.reduce((value, item) => {
      if (value) return value;
      if (compartmentTwo.includes(item)) {
        return item;
      }
      return ''
    }, '')
  });

  return calculateScore(duplicateItems);
};
