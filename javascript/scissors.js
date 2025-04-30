// Initialize the player's score
let score = 0;

// Function that handles the Rock-Paper-Scissors game logic
function play(playerChoice) {
  // Define the three possible choices
  const choices = ["rock", "paper", "scissors"];

  // Randomly select the computer's choice
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // This variable stores the result message to display
  let result = "";

  // Use a switch statement to evaluate the player's choice
  switch (playerChoice) {
    case "rock":
      // Nested switch to evaluate the computer's choice when player chooses "rock"
      switch (computerChoice) {
        case "rock":
          result = "It's a draw!";
          break;
        case "paper":
          result = "you lose mate!";
          score--; // Decrease score on loss
          break;
        case "scissors":
          result = "you win, Nice Try!";
          score++; // Increase score on win
          break;
      }
      break;

    case "paper":
      // Nested switch to evaluate the computer's choice when player chooses "paper"
      switch (computerChoice) {
        case "rock":
          result = "you win, Nice Try!";
          score++;
          break;
        case "paper":
          result = "It's a draw!";
          break;
        case "scissors":
          result = "you lose mate!";
          score--;
          break;
      }
      break;

    case "scissors":
      // Nested switch to evaluate the computer's choice when player chooses "scissors"
      switch (computerChoice) {
        case "rock":
          result = "you lose mate!";
          score--;
          break;
        case "paper":
          result = "you win, Nice Try!";
          score++;
          break;
        case "scissors":
          result = "It's a draw!";
          break;
      }
      break;

    // Handles invalid inputs that are not "rock", "paper", or "scissors"
    default:
      result = "Invalid choice!";
  }

  // Update the DOM to show the result and current score
  document.getElementById("result").textContent = `Computer chose ${computerChoice}. ${result}`;
  document.getElementById("score").textContent = score;
}
