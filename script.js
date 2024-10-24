//START set scores to 0 for player and computer and round counter to 0
let humanScore = 0;
let computerScore = 0;
let gameCounter = 0;



const div = document.querySelector('.win-lose-draw');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');

//Generates random num to choose rock-paper-scissors
function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];
    let computer = choice[Math.floor(Math.random() * 3)];
    return computer;
}

score.textContent = `Player ${humanScore} - Computer ${computerScore}`;


//PROMPT player for Rock-Paper-Scissors choice
function getHumanChoice(choice) {
    return choice.toUpperCase();
} 


// main logic, takes human choice and computer choice and determines
// the winner and updates the scores
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'ROCK') {
        if (computerChoice === 'ROCK') {
            gameCounter++;
            return div.textContent = "It's a draw";
        }

        else if (computerChoice === 'PAPER') {
            computerScore++;
            gameCounter++;
            return div.textContent = "You lose, paper beats rock";
        }
        else {
            humanScore++;
            gameCounter++;
            return div.textContent = "You WIN!, rock beats scissors";
        }
    }

    if (humanChoice === 'PAPER') {
        if (computerChoice === 'PAPER') {
            gameCounter++;
            return div.textContent = "It's a draw";
        }

        else if (computerChoice === 'SCISSORS') {
            computerScore++;
            gameCounter++;
            return div.textContent = "You lose, scissors beats paper";
        }
        else {
            humanScore++;
            gameCounter++;
            return div.textContent = "You WIN!, paper beats rock";
        }
    }

    if (humanChoice === 'SCISSORS') {
        if (computerChoice === 'SCISSORS') {
            gameCounter++;
            return div.textContent = "It's a draw";
        }

        else if (computerChoice === 'ROCK') {
            computerScore++;
            gameCounter++;
            return div.textContent = "You lose, rock beats scissors";
        }
        else {
            humanScore++;
            gameCounter++;
            return div.textContent = "You WIN!, scissors beats paper";
        }
    }
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playRound(getHumanChoice(button.id), getComputerChoice());
      score.textContent = `Player ${humanScore} - Computer ${computerScore}`;
      if (humanScore == 5) {
        winner.textContent = `Human Player Wins ${humanScore} - ${computerScore}`;
        humanScore = 0, computerScore = 0;
      };
      if (computerScore == 5) {
        winner.textContent = `Computer Player Wins ${humanScore} - ${computerScore}`;
        humanScore = 0, computerScore = 0;
      }
    });
  });

// Returns who the overall winner is
function winnerIs (humanScore, computerScore) {
    if (humanScore > computerScore) {
        return `The winner is YOU! ${humanScore} - ${computerScore}`;
    } else if (humanScore < computerScore) {
        return `The winner is NOT YOU! ${humanScore} - ${computerScore}`;
    } else {
        return `The game was a TIE! ${humanScore} - ${computerScore}`;
    }
};