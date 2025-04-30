// Import the minimum number, maximum number, and the correct answer from another JS module
import { minNum, maxNum, asnwer } from "./numberguessing.js";

// Initialize a counter to track how many guesses the user has made
let attempts = 0;

// Add an event listener to the "Submit Guess" button
document.querySelector("#submitGuess").addEventListener("click", () => {
  // Get the user's input, convert it from string to number
  let guess = Number(document.querySelector("#guessInput").value);

  // This will hold the feedback message for the user
  let message = "";

  // Use a switch statement to evaluate different cases based on the input
  switch (true) {
    // Case 1: Input is not a number
    case isNaN(guess):
      message = "Please enter a valid number!";
      changeResultStyle("red", "white"); // Set color to red (error)
      break;

    // Case 2: Input is outside the valid number range
    case guess < minNum || guess > maxNum:
      message = `Enter a number between ${minNum} and ${maxNum}.`;
      changeResultStyle("orange", "white"); // Set color to orange (warning)
      break;

    // Case 3: Guess is too low
    case guess < asnwer:
      attempts++; // Increase attempt count
      message = "Too low! Try again.";
      changeResultStyle("yellow", "black"); // Set color to yellow (hint)
      break;

    // Case 4: Guess is too high
    case guess > asnwer:
      attempts++; // Increase attempt count
      message = "Too high! Try again.";
      changeResultStyle("yellow", "black"); // Set color to yellow (hint)
      break;

    // Case 5: Correct guess
    case guess === asnwer:
      attempts++; // Increase attempt count
      message = `Correct! The answer was ${asnwer}. It took you ${attempts} attempts.`;
      changeResultStyle("green", "white"); // Set color to green (success)
      break;
  }

  // Display the feedback message to the user
  document.querySelector("#result").textContent = message;
});

// Function to change the style of the result message
function changeResultStyle(backgroundColor, textColor) {
  const resultElement = document.querySelector("#result");
  resultElement.style.backgroundColor = backgroundColor; // Set background color
  resultElement.style.color = textColor; // Set text color
}
