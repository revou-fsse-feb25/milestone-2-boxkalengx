const minNum = 1;
const maxNum = 100;
const asnwer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter valid number!");
  } else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < asnwer) {
      window.alert("too low ! try again");
    } else if (guess > asnwer) {
      window.alert("too high ! try again");
    } else {
      window.alert(`Correct! the answer was ${asnwer}. It took you ${attempts} attempts`);
      running = false;
    }
  }
}
