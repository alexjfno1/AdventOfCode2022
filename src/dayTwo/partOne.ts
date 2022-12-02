export default (input: Array<string>): number => {
  const OP_ROCK = "A";
  const OP_PAPER = "B";
  const OP_SCISSORS = "C";
  const MY_ROCK = "X";
  const MY_PAPER = "Y";
  const MY_SCISSORS = "Z";
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

  let totalScore = 0;

  input.forEach((line) => {
    const [opChoice, myChoice] = line.split(" ");
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
