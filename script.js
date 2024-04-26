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
        rock: { scissors: "Win", paper: "Lose", rock: "Tie" },
        paper: {rock: "Win", scissors: "Lose", paper: "Tie" },
        scissors: {paper: "Win", rock: "Lose", scissors: "Tie"},
    };

    message = `You ${results[humanChoice][computerChoice]}!`;
    
    return results[humanChoice][computerChoice] === "Win" ? humanScore++ : computerScore++;
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
            alert("You Won!\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        } else if (humanScore < computerScore) {
            alert("You Lost\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        } else {
            alert("You Tied!");
        }
    }
}

playGame();
