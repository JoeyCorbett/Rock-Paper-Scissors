let humanScore = 0;
let computerScore = 0;

let message;
let isActive;

const startBtn = document.querySelector(".startBtn");
const messageSpan = document.querySelector(".message");
const pScore = document.querySelector(".pScore")
const cScore = document.querySelector(".cScore");
const computerField = document.querySelector(".computerField");

messageSpan.textContent = "Press Start Button";

pScore.textContent = "Player Score: 0";
cScore.textContent = "Computer Score: 0";
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
        scissors: "You Won!",
        paper: "You Lost!",
        rock: "You Tied!",
      },
      paper: {
        rock: "You Won!",
        scissors: "You Lost!",
        paper: "You Tied!",
      },
      scissors: {
        paper: "You Won!",
        rock: "You Lost!",
        scissors: "You Tied!",
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
    pScore.textContent = `Player Score: ${humanScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;

    if (humanScore >= 5) {
        messageSpan.textContent = "Game Over: You Won!";
        startBtn.textContent = "Play Again";
        isActive = false;
        confetti({
            particleCount: 200,
            spread: 130,
            origin: { y: 0.6 }
        });
        startBtn.addEventListener("click", () => {
            newGame()
        });
        
    } else if (computerScore >= 5) {
        messageSpan.textContent = "Game Over: You Lost";
        startBtn.textContent = "Try Again";
        isActive = false;
        startBtn.addEventListener("click", () => {
            newGame();
        })
    }
}

function newGame() {
    humanScore = 0;
    computerScore = 0;
    messageSpan.textContent = '';
    pScore.textContent = '';
    cScore.textContent = '';
    messageSpan.textContent = "Choose a button";
    startBtn.textContent = "Start Game";
    pScore.textContent = "Player Score: 0";
    cScore.textContent = "Computer Score: 0";
    computerField.textContent = "❓";
}

rockBtn.addEventListener("click", () => {
    if (isActive) playGame("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    if (isActive) playGame("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    if (isActive) playGame("scissors", getComputerChoice())
})    

startBtn.addEventListener("click", () => {
    isActive = true;
    messageSpan.textContent = "Choose a button";
});








