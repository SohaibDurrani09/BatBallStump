let userScore = 0;
let computerScore = 0;
let draws = 0;

function playGame(userChoice) {
    const choices = ['bat', 'ball', 'stump'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'It\'s a draw!';
        draws++;
    } else if (
        (userChoice === 'bat' && computerChoice === 'ball') ||
        (userChoice === 'ball' && computerChoice === 'stump') ||
        (userChoice === 'stump' && computerChoice === 'bat')
    ) {
        result = 'You win!';
        userScore++;
    } else {
        result = 'You lose!';
        computerScore++;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        You chose: ${userChoice}<br>
        Computer chose: ${computerChoice}<br>
        ${result}
    `;
    
    // Remove the choices after 3 seconds
    setTimeout(() => {
        resultElement.innerHTML = result;
    }, 3000);

    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('draws').textContent = draws;
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    draws = 0;
    document.getElementById('result').innerHTML = '';
    updateScoreboard();
}
