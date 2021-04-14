let wins = 0;
let losses = 0;
let draws = 0;
let gamesPlayed = 0;

let isPlaying = "true";
while (isPlaying) {
  let playerMove = prompt("rock, paper, scissors!");
  while (
    playerMove != "rock" &&
    playerMove != "paper" &&
    playerMove != "scissors"
  ) {
    playerMove = prompt("Please input: rock, paper or scissors!");
  }

  function generateComputerMove() {
    const moves = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber];
  }

  let computerMove = generateComputerMove();
  console.log(computerMove);

  function getWinner(player1, player2) {
    if (player1 === player2) {
      draws++;
      return 0;
    } else if (player1 === "rock") {
      if (player2 === "scissors") {
        wins++;
        return 1;
      } else {
        losses++;
        return -1;
      }
    } else if (player1 === "scissors") {
      if (player2 === "rock") {
        losses++;
        return -1;
      } else {
        wins++;
        return 1;
      }
    } else {
      if (player2 === "rock") {
        wins++;
        return 1;
      } else {
        losses++;
        return -1;
      }
    }
  }
  gamesPlayed++;

  let result = getWinner(playerMove, computerMove);
  alert(
    "Result: " +
      result +
      "\nGames Played: " +
      gamesPlayed +
      "\nWins: " +
      wins +
      "\nLosses: " +
      losses +
      "\nDraws: " +
      draws
  );

  let continueGame = prompt("Would you like to play again: yes or no");
  if (continueGame != "yes") {
    isPlaying = false;
  }
}
