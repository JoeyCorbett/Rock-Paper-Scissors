let humanScore = 0;
let computerScore = 0;

let message;

const messageSpan = document.querySelector(".message");
const scoreSpan = document.querySelector(".score")
const computerField = document.querySelector(".computerField");

messageSpan.textContent = "Choose a button to start";
computerField.textContent = "❓";


const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

function getComputerChoice() {
    let randomNum = Math.floor((Math.random() * 3) + 1);
    
    if (randomNum === 1) {
        computerField.textContent = "🪨";
        return "rock";
    } else if (randomNum === 2) {
        computerField.textContent = "📄";
        return "paper";
    } else {
        computerField.textContent = "✂️";
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    const results = {
      rock: {
        scissors: "You Won! Rock beats Scissors",
        paper: "You Lost! Paper beats Rock",
        rock: "You Tied! Rock ties with Rock",
      },
      paper: {
        rock: "You Won! Paper beats Rock",
        scissors: "You Lost! Scissors beats Paper",
        paper: "You Tied! Paper ties with Paper",
      },
      scissors: {
        paper: "You Won! Scissors beats Paper",
        rock: "You Lost! Rock beats Scissors",
        scissors: "You Tied! Scissors ties with Scissors",
      },
    };

    message = results[humanChoice][computerChoice];
    if (results[humanChoice][computerChoice].startsWith("You Won")) {
        return humanScore++;
    } else if (results[humanChoice][computerChoice].startsWith("You Lost")) {
        return computerScore++;
    }
}


function playGame(userChoice, computer) {

    playRound(userChoice, computer);
    messageSpan.textContent = `${message}`;
    scoreSpan.textContent = `UserScore: ${humanScore} Computer Score: ${computerScore}`;

    if (humanScore >= 5) {
        alert("Game Over\n\nYou Won!\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        newGame()
    } else if (computerScore >= 5) {
        alert("Game Over\n\nYou Lost\n" + "User Score: " + humanScore + "\n" + "Computer Score: " + computerScore);
        newGame()
    }
}

function newGame() {
    humanScore = 0;
    computerScore = 0;
    messageSpan.textContent = '';
    scoreSpan.textContent = '';
    messageSpan.textContent = "Choose a button to start";
    computerField.textContent = "❓";
}

rockBtn.addEventListener("click", () => {
    playGame("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playGame("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playGame("scissors", getComputerChoice())
})











