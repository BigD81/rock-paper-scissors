//START set scores to 0 for player and computer and round counter to 0

//GET random choice of Rock-Papper-Scissors for computer

//PROMPT player for Rock-Papper-Scissors choice



//Generates random number between 0 - 2
function getComputerChoice() {
    let comptuer = Math.floor(Math.random() * 3);
    return comptuer;
};

console.log(getComputerChoice());