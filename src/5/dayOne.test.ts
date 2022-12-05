import * as path from "path";
import { getFileLines } from "../utils/loadInput";
import partOne from "./partOne";
import partTwo from "./partTwo";

describe("Day one", () => {
  describe("Part one", () => {
    it("returns the correct value for the example", () => {
      const exampleInput = getFileLines(
        path.join(__dirname, "./input-example.txt")
      );
      expect(partOne(exampleInput)).toEqual(24000);
    });
  });

  describe("Part two", () => {
    it("returns the correct value for the example", () => {
      const exampleInput = getFileLines(
        path.join(__dirname, "./input-example.txt")
      );
      expect(partTwo(exampleInput)).toEqual(45000);
    });
  });
});
