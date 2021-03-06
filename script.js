'use strict';
/*
Tests
console.log(document.querySelector('.message').textContent);
// Change text content
document.querySelector('.message').textContent = 'Correct Number!🥳';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 15;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function bgColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   No Input
  if (guess <= 0 || guess > 20) {
    displayMessage(`⛔ No number!`);

    // When correct number guesses
  } else if (guess === secretNumber) {
    displayMessage(`🏆 Correct Number!`);
    bgColor('#60b347');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);
    // document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.highscore').textContent = highscore;
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? `📈 Number Too High!` : `📉 Number Too Low!`
      );
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? `📈 Number Too High!` : `📉 Number Too Low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`🤬 You lost the game!`);
      document.querySelector('.score').textContent = 0;
      displayNumber(secretNumber);
      bgColor('#DC143C');
    }
  }
  // When number too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `📈 Number Too High!`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `🤬 You lost the game!`;
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.number').textContent = secretNumber;
  //       document.querySelector('body').style.backgroundColor = '#DC143C';
  //     }
  //     // When number too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = `📉 Number Too Low!`;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = `🤬 You lost the game!`;
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.number').textContent = secretNumber;
  //       document.querySelector('body').style.backgroundColor = '#DC143C';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';
  bgColor('#222');
  document.querySelector('.number').style.width = '15rem';
});
