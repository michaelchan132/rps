let buttons = document.querySelector(".buttons");
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
    if (playerChoice == computerChoice) {
        console.log("It's a tie!")        
    } else if ((playerChoice == "rock" && computerChoice == "scissors") ||
                (playerChoice == "paper" && computerChoice == "rock") ||
                (playerChoice == "scissors" && computerChoice == "paper")

    ){
        ++playerScore
    } else {
    computerScore++;
}
}

if (playerScore > computerScore) {
    console.log("You win the game");
} else if (playerScore === computerScore) {
    console.log("It's a tie");
} else {
    console.log("You lose the game");
}
