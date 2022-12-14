import * as path from "path";
import { getFileLines } from "../../utils/loadInput";
import partOne from "./partOne";
import partTwo from "./partTwo";

describe("Day one", () => {
  describe("Part nine", () => {
    xit("returns the correct value for the example", () => {
      const exampleInput = getFileLines(
        path.join(__dirname, "./input-example.txt")
      );
      expect(partOne(exampleInput)).toEqual(13);
    });
  });

  describe("Part two", () => {
    it("returns the correct value for the example", () => {
      const exampleInput = getFileLines(
        path.join(__dirname, "./input-example.txt")
      );
      expect(partTwo(exampleInput)).toEqual(1);
    });
  });
});
