let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const randomNum = getRandomInt(3);
  let choice;

  if (randomNum === 0) {
    choice = "rock";
  } else if (randomNum === 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function getHumanChoice() {
  const choice = prompt("Choose Rock, Paper, or Scissors:");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Its a DRAW!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
    return humanScore++;
  } else {
    console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
    return computerScore++;
  }
}

function playGame(max) {
  for (i = 0; i < max; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame(5);

console.log(`Your Score: ${humanScore}`);
console.log(`Computer Score: ${computerScore}`);

if (humanScore > computerScore) {
  console.log("You are the WINNER!");
} else {
  console.log("GAME OVER!");
}
