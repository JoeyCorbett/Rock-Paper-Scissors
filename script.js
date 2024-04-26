let humanScore = 0;
let computerScore = 0;

let exit = false;

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
            let confirmChoice = window.confirm("Are you sure you want to exit?");
            if (confirmChoice) {
                exit = true;
                break;
            } else {
                continue;
            }
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
            return computerScore++;
        } else if (computerChoice === "scissors") {
            alert("You Won! Rock beats Scissors");
            return humanScore++;
        } else {
            alert("You Tied! Rock ties with Rock");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            alert("You Lost! Scissors beats Paper");
            return computerScore++;
        } else if (computerChoice === "rock") {
            alert("You Won! Paper beats Rock");
            return humanScore++;
        } else {
            alert("You Tied! Paper ties with Paper")
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            alert("You Lost! Rock beats Scissors");
            return computerScore++;
        } else if (computerChoice === "paper") {
            alert("You Won! Scissors beats Paper");
            return humanScore++;
        } else {
            alert("You Tied! Scissors ties with Scissors");
        }
    }
}

function playGame(){
    
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        if (exit) {
            break;
        }
    }
    if (!exit) {
        if (humanScore > computerScore) {
            alert("You Won!\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        } else if (humanScore < computerScore) {
            alert("You Lost\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        } else {
            alert("You Tied!");
        }
    }
}

playGame();
