let randomNumber = Math.floor(Math.random() * 100) + 1;
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessId");
const preGuess = document.querySelector(".pre-guess");
const remainingGuess = document.querySelector(".remain-guess");
const lowHigh = document.querySelector(".low-high");
const startOver = document.querySelector(".result");
let previousGuess = [];
let numGuess = 1;
let playGame = true;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  validateGuess(guess);
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please Enter a number less than 100");
  } else {
    previousGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMsg(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg("You god damm right!");
    endGame();
  } else if (guess < randomNumber) {
    displayMsg("Number is too low");
  } else if (guess > randomNumber) {
    displayMsg("Number is too high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  preGuess.innerHTML += `${guess}, `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  lowHigh.innerHTML = `<h3>${msg}</h3>`;
}

function endGame() {
  userInput.disabled = true;
  submit.disabled = true;
  const newGameButton = document.createElement("button");
  newGameButton.id = "newGameButton";
  newGameButton.innerText = "Start New Game";
  startOver.appendChild(newGameButton);
  playGame = false;
  newGameButton.addEventListener("click", function () {
    newGame();
  });
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  previousGuess = [];
  numGuess = 1;
  preGuess.innerHTML = "";
  remainingGuess.innerHTML = "10";
  lowHigh.innerHTML = "";
  userInput.disabled = false;
  submit.disabled = false;
  const newGameButton = document.querySelector("#newGameButton");
  startOver.removeChild(newGameButton);
  playGame = true;
}
