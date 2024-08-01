'use strict';

let number = document.querySelector('.number');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreEachGame = document.querySelector('.score');
let guessEachGame = document.querySelector('.guess');
let body = document.querySelector('body');
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEachGame.value);

  // When there is no number
  if (!guess) {
    displayMessage('⛔️ No number!');
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Guess is correct!');
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      scoreEachGame.textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      body.style.backgroundColor = '#eb092b';
      scoreEachGame.textContent = 0;
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreEachGame.textContent = score;
  guessEachGame.value = '';
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  displayMessage('Start guessing...');
});
