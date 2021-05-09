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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //   No Input
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number!`;

    // When correct number guesses
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🏆 Correct Number!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When number too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📈 Number Too High!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `🤬 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
    // When number too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 Number Too Low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `🤬 You lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});
