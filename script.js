function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  let randomNum = getRandomInt(3);
  let choice;

  if (randomNum === 0) {
    choice = "Rock";
  } else if (randomNum === 1) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }

  return choice;
}
