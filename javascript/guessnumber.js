// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Set the number of attempts the player has
let attemptsLeft = 5;

// Get references to HTML elements
const input = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const message = document.querySelector(".message");
const attemptsText = document.getElementById("attempts");
const restartBtn = document.getElementById("restart-btn");

// Event listener for the Submit button
submitBtn.addEventListener("click", () => {
  // Convert user input to a number
  const userGuess = parseInt(input.value);

  // Validate input: check if it's a number between 1 and 100
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  // Check if the guess is correct
  if (userGuess === randomNumber) {
    message.textContent = "🎉 Correct! You win!";
    endGame(); // End the game if guessed correctly
  } else {
    // Decrease attempts if the guess is incorrect
    attemptsLeft--;
    attemptsText.textContent = attemptsLeft;

    // If no attempts are left, show game over message
    if (attemptsLeft === 0) {
      message.textContent = `😢 Game Over! The number was ${randomNumber}.`;
      endGame();
    } else {
      // Give hint to the player
      message.textContent = userGuess > randomNumber ? "📉 Too High!" : "📈 Too Low!";
    }
  }

  // Clear the input field for the next guess
  input.value = "";
});

// Function to disable input and show restart button
function endGame() {
  input.disabled = true;
  submitBtn.disabled = true;
  restartBtn.style.display = "inline-block";
}

// Event listener for the Restart button
restartBtn.addEventListener("click", () => {
  // Reset the game state
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 5;
  input.disabled = false;
  submitBtn.disabled = false;
  input.value = "";
  message.textContent = "";
  attemptsText.textContent = attemptsLeft;
  restartBtn.style.display = "none";
});
