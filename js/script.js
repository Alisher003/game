'use strict';

let elCheckBtn = document.querySelector('.check');
let elGuessInput = document.querySelector('.guess');
let elMessage = document.querySelector('.message');
let elSecretNumber = document.querySelector('.number');
let elScore = document.querySelector('.score');
let elHighScore = document.querySelector('.highscore');
let elResetBtn = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 10;
let highscore = 0;

elCheckBtn.addEventListener('click', function () {
  let inputValue = elGuessInput.value * 1;

  if (!inputValue) {
    elMessage.textContent = 'Iltimos son kiriting!';
  } else if (inputValue === secretNumber) {
    elMessage.textContent = 'Topdingiz!';
    elSecretNumber.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      elHighScore.textContent = highscore;
    }

    elCheckBtn.disabled = true;
  } else if (inputValue !== secretNumber) {
    elMessage.textContent =
      inputValue > secretNumber ? 'Bu raqam katta!' : 'Bu raqam kichik!';
    score--;
    elScore.textContent = score;

    if (score <= 0) {
      elMessage.textContent = 'Game Over!';
      elCheckBtn.disabled = true;
      document.body.style.backgroundColor = 'red';
    }
  }
});

elResetBtn.addEventListener('click', () => {
  score = 10;
  elScore.textContent = score;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  elSecretNumber.textContent = '?';
  document.body.style.backgroundColor = '#222';
  elGuessInput.value = '';
  elMessage.textContent = 'Loading...';
  elCheckBtn.disabled = false;
});
