let score = 0;

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
    result = "You win!";
    score++;
  } else {
    result = "You lose!";
    score--;
  }
  document.getElementById("result").textContent = `Computer chose ${computerChoice}. ${result}`;
  document.getElementById("score").textContent = score;
}
