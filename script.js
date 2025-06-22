let playerScore = 0;
let computerScore = 0;
let gameOver = false;

let buttons = document.querySelector(".buttons");
let score = document.querySelector("#score");
let roundResults = document.querySelector("#roundResults");
let choices = document.querySelector("#choices");
let gameResults = document.querySelector("#gameResults");
let reset = document.querySelector("#reset");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id){
        case 'rock':
            playRound('rock');
            break;
        case 'paper':
            playRound('paper');
            break;
        case 'scissors':
            playRound('scissors');
            break;
    }
});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0:
            return 'rock';
            break;
        case 1: 
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function getPlayerChoice(){
    let pChoice = prompt('Please choose rock, paper of scissors').toLowerCase();
    if ((pChoice === 'rock') ||
    (pChoice === 'paper') ||
    (pChoice === 'scissors')
    ){
        return pChoice;
    } else {
        return 'Invalid Choice';
    }
}

function playRound(playerChoice){
    if(gameOver){
        return;
    }
    const computerChoice = getComputerChoice();
    choices.textContent = `You chose ${playerChoice} | The Computer chose ${computerChoice}`;
    if (playerChoice == computerChoice) {
        roundResults.textContent =  "It's a tie";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") ||
                (playerChoice == "paper" && computerChoice == "rock") ||
                (playerChoice == "scissors" && computerChoice == "paper")

    ){
        roundResults.textContent = "You win";
        ++playerScore
    } else {
        roundResults.textContent = "You lose";
        computerScore++;
    }
    updateScore();
    checkGameWinner();
}

function updateScore(){
    score.textContent = `Your Score is ${playerScore} | The Computers Score is ${computerScore}`;
}

function checkGameWinner(){
    if(playerScore == 5 || computerScore == 5){
        gameOver = true;
        if(playerScore == 5){
            gameResults.textContent = "You win the game";
        } else {
            gameResults.textContent = "Game Over. Computer wins the game";
        }
        reset.innerHTML = `<button id="resetBtn">Play again</button>`;
        resetBtn.addEventListener("click", () => resetGame());
    }
}
function resetGame(){
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    updateScore();
    choices.textContent = '';
    roundResults.textContent = '';
    gameResults.textContent = '';  
    reset.innerHTML = '';
}