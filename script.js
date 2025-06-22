let buttons = document.querySelector(".buttons");
let score = document.querySelector("#score");
let results = document.querySelector("#results");
let choices = document.querySelector("#choices");
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

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    choices.textContent = `You chose ${playerChoice} | The Computer chose ${computerChoice}`;
    if (playerChoice == computerChoice) {
        results.textContent =  "It's a tie";
    } else if ((playerChoice == "rock" && computerChoice == "scissors") ||
                (playerChoice == "paper" && computerChoice == "rock") ||
                (playerChoice == "scissors" && computerChoice == "paper")

    ){
        results.textContent = "You win";
        ++playerScore
    } else {
        results.textContent = "You lose";
        computerScore++;
    }
    score.textContent = `Your Score is ${playerScore} | The Computers Score is ${computerScore}`;
}