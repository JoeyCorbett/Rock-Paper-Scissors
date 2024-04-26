let humanScore = 0;
let computerScore = 0;

let exit = false;
let message;

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
    const results = { 
        rock: { scissors: "You Won! Rock beats Scissors", paper: "You Lost! Paper beats Rock", rock: "You Tied! Rock ties with Rock" },
        paper: {rock: "You Won! Paper beats Rock", scissors: "You Lost! Scissors beats Paper", paper: "You Tied! Paper ties with Paper" },
        scissors: {paper: "You Won! Scissors beats Paper", rock: "You Lost! Rock beats Scissors", scissors: "You Tied! Scissors ties with Scissors"},
    };

    message = results[humanChoice][computerChoice];
    if (results[humanChoice][computerChoice].startsWith("You Won")) {
        return humanScore++;
    } else if (results[humanChoice][computerChoice].startsWith("You Lost")) {
        return computerScore++;
    } 
}

function playGame(){
    
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        
        if (exit) {
            break;
        } else {
            alert(message + "\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        }
    }
    if (!exit) {
        if (humanScore > computerScore) {
            alert("Game Over\n\nYou Won!\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        } else if (humanScore < computerScore) {
            alert("Game Over\n\nYou Lost\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        } else {
            alert("Game Over\n\nYou Tied!\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        }
    }
}

playGame();
