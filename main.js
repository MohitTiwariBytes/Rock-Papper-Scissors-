const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultMessage = document.getElementById('result-message');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
        resultMessage.textContent = '...';
        setTimeout(() => {
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
            const result = getResult(playerChoice, computerChoice);
            resultMessage.textContent = result;
            updateScore(result);
        }, 1000);
    });
});

function getResult(player, computer) {
    if (player === computer) {
        return 'It\'s a draw!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function updateScore(result) {
    if (result === 'You win!') {
        playerScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}
