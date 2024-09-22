//START set scores to 0 for player and computer and round counter to 0
let humanScore = 0;
let computerScore = 0;

//Generates random num to choose rock-paper-scissors
function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    let computer = choice[Math.floor(Math.random() * 3)];
    return computer;
}


//PROMPT player for Rock-Paper-Scissors choice
function getHumanChoice() {
    let choice = ["ROCK", "PAPER", "SCISSORS"];
    let humanChoice = prompt("Please, what's your choice? (Rock, paper or scissors) ");
    for (let i = 0; i < choice.length; i++) {
        if (humanChoice.toUpperCase() === choice[i]) {
            return humanChoice.toUpperCase();
    } 
} return(getHumanChoice());

}

// main logic, takes human choice and computer choice and determines
// the winner and updates the scores
function playRound(humanChoice, computerChoice) {
    console.log(computerChoice);
    if (humanChoice === 'ROCK') {
        if (computerChoice === 'ROCK') {
            return console.log("It's a draw");
        }

        else if (computerChoice === 'PAPER') {
            computerScore++;
            return console.log("You lose, paper beats rock.");
        }
        else {
            humanScore++;
            return console.log("You WIN!, rock beats scissors.");
        }
    }

    if (humanChoice === 'PAPER') {
        if (computerChoice === 'PAPER') {
            return console.log("It's a draw");
        }

        else if (computerChoice === 'SCISSORS') {
            computerScore++;
            return console.log("You lose, scissors beats paper.");
        }
        else {
            humanScore++;
            return console.log("You WIN!, paper beats rock.");
        }
    }

    if (humanChoice === 'SCISSORS') {
        if (computerChoice === 'SCISSORS') {
            return console.log("It's a draw");
        }

        else if (computerChoice === 'ROCK') {
            computerScore++;
            return console.log("You lose, rock beats scissors");
        }
        else {
            humanScore++;
            return console.log("You WIN!, scissors beats paper.");
        }
    }
}

// stores the human choice and computer choice
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);
