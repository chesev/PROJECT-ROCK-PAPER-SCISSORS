//array
let computer = ["rock", "paper", "scissors"];


//select random item from an array

function getComputerChoice() {
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

    //created a function named game
function game() {
    const playerSelection = prompt("Please enter 'Rock, Paper, or Scissors'", "");
    const computerSelection = getComputerChoice();
    console.log('You threw: ' + playerSelection);
    console.log('The computer threw: ' + computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    // const round = playRound (playerSelection, computerSelection) 
    // return playRound (playerSelection, computerSelection);

}

for (let i = 0; i < 5; i++) {
        console.log(game());
    }




// const playerSelection = prompt("Please enter 'Rock, Paper, or Scissors'", "");
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// game();
// console.log(playRound(playerSelection, computerSelection));
// console.log(getComputerChoice())





















