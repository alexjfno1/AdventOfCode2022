export default (input: Array<string>): number => {
  const OP_ROCK = "A";
  const OP_PAPER = "B";
  const OP_SCISSORS = "C";
  const MY_ROCK = "D";
  const MY_PAPER = "E";
  const MY_SCISSORS = "F";
  const NEEDS_LOSE = "X";
  const NEEDS_WIN = "Z";
  const ROCK_SCORE = 1;
  const PAPER_SCORE = 2;
  const SCISSORS_SCORE = 3;
  const WIN_SCORE = 6;
  const LOSE_SCORE = 0;
  const DRAW_SCORE = 3;

  const checkResult = (
    opChoice: string,
    myChoice: string
  ): "WIN" | "LOSE" | "DRAW" => {
    if (
      (opChoice === OP_ROCK && myChoice === MY_ROCK) ||
      (opChoice === OP_PAPER && myChoice === MY_PAPER) ||
      (opChoice === OP_SCISSORS && myChoice === MY_SCISSORS)
    ) {
      return "DRAW";
    }

    if (
      (opChoice === OP_ROCK && myChoice === MY_PAPER) ||
      (opChoice === OP_PAPER && myChoice === MY_SCISSORS) ||
      (opChoice === OP_SCISSORS && myChoice === MY_ROCK)
    ) {
      return "WIN";
    }

    return "LOSE";
  };

  const calculateMyChoice = (
    opChoice: string,
    expectedResult: string
  ): string => {
    if (expectedResult === NEEDS_WIN) {
      switch (opChoice) {
        case OP_ROCK:
          return MY_PAPER;
        case OP_PAPER:
          return MY_SCISSORS;
        case OP_SCISSORS:
          return MY_ROCK;
      }
    }

    if (expectedResult === NEEDS_LOSE) {
      switch (opChoice) {
        case OP_ROCK:
          return MY_SCISSORS;
        case OP_PAPER:
          return MY_ROCK;
        case OP_SCISSORS:
          return MY_PAPER;
      }
    }

    switch (opChoice) {
      case OP_ROCK:
        return MY_ROCK;
      case OP_PAPER:
        return MY_PAPER;
      case OP_SCISSORS:
        return MY_SCISSORS;
    }

    return "";
  };

  let totalScore = 0;

  input.forEach((line) => {
    const [opChoice, expectedResult] = line.split(" ");
    const myChoice = calculateMyChoice(opChoice, expectedResult);

    const roundResult = checkResult(opChoice, myChoice);

    if (roundResult === "WIN") {
      totalScore += WIN_SCORE;
    }

    if (roundResult === "LOSE") {
      totalScore += LOSE_SCORE;
    }

    if (roundResult === "DRAW") {
      totalScore += DRAW_SCORE;
    }

    switch (myChoice) {
      case MY_ROCK:
        totalScore += ROCK_SCORE;
        return;
      case MY_PAPER:
        totalScore += PAPER_SCORE;
        return;
      case MY_SCISSORS:
        totalScore += SCISSORS_SCORE;
        return;
    }
  });

  return totalScore;
};
