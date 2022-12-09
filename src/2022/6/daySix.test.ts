import partOne from "./partOne";
import partTwo from "./partTwo";

describe("Day six", () => {
  describe("Part one", () => {
    const examples: Array<[string, number]> = [
      ["bvwbjplbgvbhsrlpgdmjqwftvncz", 5],
      ["nppdvjthqldpwncqszvftbrmjlhg", 6],
      ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 10],
      ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 11],
    ];

    examples.forEach((example, i) => {
      const [input, expected] = example;
      it(`returns the correct value for example ${i}`, () => {
        expect(partOne(input)).toEqual(expected);
      });
    });
  });

  describe("Part two", () => {
    const examples: Array<[string, number]> = [
      ["mjqjpqmgbljsphdztnvjfqwrcgsmlb", 19],
      ["bvwbjplbgvbhsrlpgdmjqwftvncz", 23],
      ["nppdvjthqldpwncqszvftbrmjlhg", 23],
      ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 29],
      ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 26],
    ];

    examples.forEach((example, i) => {
      const [input, expected] = example;
      it("returns the correct value for the example", () => {
        expect(partTwo(input)).toEqual(expected);
      });
    });
  });
});
