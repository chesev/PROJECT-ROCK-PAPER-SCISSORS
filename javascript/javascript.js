//array
let computer = ["rock", "paper", "scissors"];


//select random item from an array

function computerPlay() {
    let index = computer[Math.floor(Math.random() * computer.length)]
    return index;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    return "This game is a tie!";
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats Rock.";
        } else {
            return "Congratulations, you won!";
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "You lose! Scissors beats Paper.";
        } else {
            return "Congratulations, you won!";
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You lose! Rock beats Scissors.";
        } else {
            return "Congratulations, you won!";
        }
    }
}
    
const playerSelection = prompt("Please enter 'Rock, Paper, Scissors'", "");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
// console.log(computerPlay())