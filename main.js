let wins = 0;
let losses = 0;
let draws = 0;
let gamesPlayed = 0;
let playerMove = "paper";
let hasWon = true;

let rockButton = document.getElementById("button_rock");
let paperButton = document.getElementById("button_paper");
let scissorsButton = document.getElementById("button_scissors");

updateScores();
scissorsButton.addEventListener("click", function () {
  playerMove = "scissors";
  playGame();
});
rockButton.addEventListener("click", function () {
  playerMove = "rock";
  playGame();
});
paperButton.addEventListener("click", function () {
  playerMove = "paper";
  playGame();
});

function playGame() {
  resetBackground();
  computerMove = generateComputerMove();
  getWinner(playerMove, computerMove);
  gamesPlayed++;
  updateScores();
  displayImages();
  if (computerMove === playerMove) {
    resetBackground();
  } else {
    changeBackground();
  }
}
function generateComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return moves[randomNumber];
}

function getWinner(player1, player2) {
  if (player1 === player2) {
    draws++;
    resetBackground();
  } else if (player1 === "rock") {
    if (player2 === "scissors") {
      wins++;
      hasWon = true;
    } else {
      losses++;
      hasWon = false;
    }
  } else if (player1 === "scissors") {
    if (player2 === "rock") {
      losses++;
      hasWon = false;
    } else {
      wins++;
      hasWon = true;
    }
  } else {
    if (player2 === "rock") {
      wins++;
      hasWon = true;
    } else {
      losses++;
      hasWon = false;
    }
  }
}

function updateScores() {
  document.getElementById("scores-played").innerText = `Games Playes: ${gamesPlayed}`;
  document.getElementById("scores-wins").innerText = `Games Won: ${wins}`;
  document.getElementById("scores-draws").innerText = `Games Drawn: ${draws}`;
  document.getElementById("scores-losses").innerText = `Games Lost: ${losses}`;
}
function displayImages() {
  if (document.getElementById("image-player")) {
    document.getElementById("image-player").remove();
  }
  let imagePlayer = new Image();
  imagePlayer.id = "image-player";
  imagePlayer.src = playerMove + ".png";
  imagePlayer.classList.add("my-img");
  document.querySelector(".player_move").appendChild(imagePlayer);

  if (document.getElementById("image-computer")) {
    document.getElementById("image-computer").remove();
  }
  let imageComputer = new Image();
  imageComputer.id = "image-computer";
  imageComputer.src = computerMove + ".png";
  imageComputer.classList.add("my-img");
  document.querySelector(".computer_move").appendChild(imageComputer);
}
document.getElementById("submitName").addEventListener("click", function () {
  let userName = document.getElementById("username").value;
  const checkFirstLetter = /[a-z]/i.test(userName.charAt(0));
  if (userName.charAt(0) === userName.charAt(0).toUpperCase() && checkFirstLetter) {
    document.getElementById("your-move").innerText = userName;
  }
  return false;
});
function changeBackground() {
  let boxBackground = document.querySelector(".player_move");
  if (hasWon) {
    boxBackground.style.backgroundColor = "#87d887";
  } else {
    boxBackground.style.backgroundColor = "#e68282";
  }
}
function resetBackground() {
  document.querySelector(".player_move").style.backgroundColor = "#8a89b8";
}
