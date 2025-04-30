// Get the element displaying the number of gems
let gem = document.querySelector(".gem-cost");

// Convert the inner text (string) of gem element to a number for calculations
let parsedGem = parseFloat(gem.innerHTML);

// Get the element displaying the cost of a clicker
let clickerCost = document.querySelector(".clicker-cost");

// Convert the inner text (string) of clicker cost to a number
let parsedClickerCost = parseFloat(clickerCost.innerHTML);

// Function to increase gem count by 1 and update the display
function incrementGem() {
  parsedGem += 1;
  gem.innerHTML = parsedGem; // Update the displayed gem count
}

// Function to handle buying a clicker
function buyClicker() {
  // Only proceed if player has enough gems to buy a clicker
  if (parsedGem >= parsedClickerCost) {
    parsedGem -= parsedClickerCost; // Subtract clicker cost from current gems
    gem.innerHTML = parsedGem; // Update the displayed gem count
  }
}

// Add event listener to "Mine Gem" button to call incrementGem when clicked
document.querySelector(".gem-button").addEventListener("click", incrementGem);

// Add event listener to "Buy Clicker" button to call buyClicker when clicked
document.querySelector(".clicker-button").addEventListener("click", buyClicker);

document.getElementById("changeColorButton").addEventListener("click", () => {
  document.getElementsById("text").style.backgroundColor = "white";
});
