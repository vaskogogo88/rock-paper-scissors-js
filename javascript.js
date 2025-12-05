// Function that returns a random integer in the range [0, max)
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Function that randomly returns "rock", "paper" or “scissors”.
function getComputerChoice() {
    // Get a random integer number between 0 and 2.
    let randomNumber = getRandomInt(3);
    let randomChoice;

    switch (randomNumber) {
        case 0: 
            randomChoice = "rock";
            break;
        case 1:
            randomChoice = "paper";
            break;
        case 2:
            randomChoice = "scissors";
            break;
        default:
            return "Error. Invalid random number generated!";
    }
    return randomChoice;
}

// Function that prompts the user for a choice and then returns it.
function getUserChoice() {
    let userChoice = prompt("Please pick between 'rock', 'paper' and 'scissors'");
    return userChoice;
}