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

// Function that will be used to play a single round of rock, paper, scissors.
function playRound(humanChoice, computerChoice) {
    // Make the human choice case insensitive.
    humanChoice = humanChoice.toLowerCase();

    // Check if the human and computer choices are the same.
    if (humanChoice === computerChoice) {
        console.log("Tie. Nobody wins.")
        return;
    }

    // Check if the human picked rock.
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            console.log("Computer wins.");
        } else {
            humanScore++;
            console.log("You win. Congratulations.");
        }
        // Exit the function.
        return;
    } 

    // Check if the human picked paper.
    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            console.log("Computer wins.");
        } else {
            humanScore++;
            console.log("You win. COngratulations.")
        }
        // Exit the function.
        return;
    }

    // Check if the human picked scissors.
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            console.log("Computer wins.");
        } else {
            humanScore++;
            console.log("You win. Congratulations.");
        }
    }
}

// Function that prompts the user for a choice and then returns it.
function getUserChoice() {
    let userChoice = prompt("Please pick between 'rock', 'paper' and 'scissors'");
    return userChoice;
}

// Declare the variables that will be used to keep track of the score.
let computerScore = 0;
let humanScore = 0;



