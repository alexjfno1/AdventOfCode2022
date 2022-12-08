import { findUniqueMarkerPosition } from "./partOne";

export default (input: string): number => {
  return findUniqueMarkerPosition(input.toString(), 14);
};
