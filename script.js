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

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No number!`;
  }
});
