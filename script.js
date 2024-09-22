//START set scores to 0 for player and computer and round counter to 0
let humanScore = 0;
let computerScore = 0;

//Generates random num to choose rock-papper-scissors
function getComputerChoice() {
    const choice = ["ROCK", "PAPPER", "SCISSORS"];
    let comptuer = choice[Math.floor(Math.random() * 3)];
    return comptuer;
}


//PROMPT player for Rock-Papper-Scissors choice
function getHumanChoice() {
    let choice = ["ROCK", "PAPPER", "SCISSORS"];
    let humanChoice = prompt("Please, what's your choice? (Rock, papper or scissors) ");
    for (let i = 0; i < choice.length; i++) {
        if (humanChoice.toUpperCase() === choice[i]) {
            return humanChoice.toUpperCase();
    } 
} return(getHumanChoice());

}

