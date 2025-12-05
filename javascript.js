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
    // Declare the winner variable
    let winner;
    
    // Make the human choice case insensitive.
    humanChoice = humanChoice.toLowerCase();

    // Check if the human and computer choices are the same.
    if (humanChoice === computerChoice) {
        winner = "Tie";
        return winner;
    }

    // Check if the human picked rock.
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            winner = "Computer";
        } else {
            humanScore++;
            winner = "Human";
        }
    } 

    // Check if the human picked paper.
    if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore++;
            winner = "Computer";
        } else {
            humanScore++;
            winner = "Human";
        }
    }

    // Check if the human picked scissors.
    if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            winner = "Computer";
        } else {
            humanScore++;
            winner = "Human";
        }
    }
    return winner;
}

// Function that prompts the user for a choice and then returns it.
function getUserChoice() {
    let userChoice = prompt("Please pick between 'rock', 'paper' and 'scissors'");
    return userChoice;
}

// Function that will be used to simulate the game. 
function playGame() {
    let userChoice;
    let computerChoice;
    let winner;
    for (let i = 0; i < 5; i++) {
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        winner = playRound(userChoice, computerChoice);
        
        
        console.log(`Round ${i+1}`)
        // Check who is the winner
        switch (winner) {
            case "Tie":
                console.log("Tie. Nobody wins.");
                break;
            case "Computer":
                console.log("Computer wins. Better luck next time!");
                break;
            case "Human":
                console.log("You win. Congratulations!");
                break;
            default:
                console.log("Error. Did not declare a correct winner.");
        }

        console.log(`User score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}

// Declare the variables that will be used to keep track of the score.
let computerScore = 0;
let humanScore = 0;

playGame();