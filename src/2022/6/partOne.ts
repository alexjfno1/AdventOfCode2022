const hasRepeatLetter = (letters: Array<string>): boolean => {
  let hasRepeat = false;

  for (let i = 0; i < letters.length; i += 1) {
    const containsRepeatLetters =
      letters.filter((l) => l === letters[i]).length > 1;

    if (containsRepeatLetters) {
      hasRepeat = true;
      break;
    }
  }

  return hasRepeat;
};

export const findUniqueMarkerPosition = (
  input: string,
  uniqueMarkerSize: number
): number => {
  const lettersArray = input.toString().split("");

  let result = 0;
  for (let i = 0; i < lettersArray.length; i += 1) {
    if (!hasRepeatLetter(lettersArray.slice(i, i + uniqueMarkerSize))) {
      result = i + uniqueMarkerSize;
      break;
    }
  }

  return result;
};

export default (input: string): number => {
  return findUniqueMarkerPosition(input, 4);
};
