// JavaScript for Unraveling the Knot Game
let moves = 0;
let knotElement = document.getElementById("knot");
let moveCounter = document.getElementById("move-counter");
let shuffleButton = document.getElementById("shuffle-button");
let resetButton = document.getElementById("reset-button");
let messageElement = document.getElementById("message");

let knotPositions = [
  { top: "10px", left: "50px" },
  { top: "30px", left: "100px" },
  { top: "70px", left: "150px" },
  { top: "50px", left: "200px" },
  { top: "100px", left: "250px" },
  { top: "150px", left: "300px" },
];

function shuffleKnot() {
  moves++;
  moveCounter.textContent = moves;

  let randomPosition = knotPositions[Math.floor(Math.random() * knotPositions.length)];
  knotElement.style.top = randomPosition.top;
  knotElement.style.left = randomPosition.left;

  messageElement.textContent = "Good Luck! Try to unravel the knot.";
}

function resetKnot() {
  moves = 0;
  moveCounter.textContent = moves;
  knotElement.style.top = "100px";
  knotElement.style.left = "100px";
  messageElement.textContent = "";
}

// Event listeners
shuffleButton.addEventListener("click", shuffleKnot);
resetButton.addEventListener("click", resetKnot);

// Initialize the game state
resetKnot();
