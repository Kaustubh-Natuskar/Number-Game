'use strict';

let number = generateNumber();

let score = 20;

let highScore = 0;

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setBackgroundColor(backColor) {
  document.querySelector('body').style.backgroundColor = backColor;
}

function setguessBoxWidth(width) {
  document.querySelector('.number').style.width = width;
}

function numberBox(number){
  document.querySelector('.number').textContent = number;
}
function scoreBoxContent(scoreMessage) {
  document.querySelector('.score').textContent = scoreMessage;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number, Enter Number');
  } else if (guess === number) {
    displayMessage('correct Guess!');
    numberBox(number);
    setBackgroundColor('#60b347');
    setguessBoxWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'guess is too High!' : 'guess is too Low');
      score--;
      scoreBoxContent(score);
    } else {
      scoreBoxContent('you Lost the game');
      setBackgroundColor('#F90716');
      setguessBoxWidth('30rem');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = generateNumber();
  displayMessage('start guessing...');
  scoreBoxContent(score);
  numberBox('?');
  document.querySelector('.guess').value = '';
  setBackgroundColor('#222');
  setguessBoxWidth('15rem');
  highScore = 0;
});
