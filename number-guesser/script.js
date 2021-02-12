let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor((Math.random() * 10));
}

function compareGuesses(userGuess, computerGuess, target) {
    let userDiff = Math.abs(userGuess - target);
    let computerDiff = Math.abs(computerGuess - target);
    return userDiff < computerDiff;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}