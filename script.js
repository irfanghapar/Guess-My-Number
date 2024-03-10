'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function() { 
    const guess = Number(document.querySelector('.guess').value);
// Need to use Number to convert the string to a number

if (!guess) {
    displayMessage('Wrong number! ⛔️');
}
else if(guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('.guess').textCont456ent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').style.width = '30rem';
    if (score > highScore) {
        score = highScore;
        document.querySelector('.highScore').textContent = highScore
    }
}
else if(guess !== secretNumber) {
    if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too High 📈 ' : 'Too low 📉');
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        displayMessage('You lost the game! 💥');
        document.querySelector('.score').textContent = 0;
    }
}
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = 0;
    document.querySelector('body').styleBackgroundColor = '#222';
    document.querySelector('.guess').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
});
