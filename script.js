let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    while (true) {
        let choice = prompt("Choose Rock, Paper, or Scissors");
        if (choice === null) {
            alert("User Cancelled Prompt");
            break;
        } else if (choice.toLowerCase() === "rock") {
            return "rock";
        } else if (choice.toLowerCase() === "paper") {
            return "paper";
        } else if (choice.toLowerCase() === "scissors") {
            return "scissors";
        } else {
            alert("[Invalid Input] Please Try Again.");
        }
    }       
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            alert("You Lost! Paper beats Rock!");
            computerScore++;
        } else if (computerChoice === "scissors") {
            alert("You Won! Rock beats Scissors");
            humanScore++;
        } else {
            alert("You Tied! Rock ties with Rock");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            alert("You Lost! Scissors beats Paper");
            computerScore++;
        } else if (computerChoice === "rock") {
            alert("You Won! Paper beats Rock");
            humanScore++;
        } else {
            alert("You Tied! Paper ties with Paper")
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            alert("You Lost! Rock beats Scissors");
            computerScore++;
        } else if (computerChoice === "paper") {
            alert("You Won! Scissors beats Paper");
            humanScore++;
        } else {
            alert("You Tied! Scissors ties with Scissors");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanScore);
console.log(computerScore);

