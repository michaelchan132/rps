let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target();
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

function playGame(){
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

    function getHumanChoice(){
        let hChoice = prompt('Please choose rock, paper of scissors').toLowerCase();
        if (hChoice === 'rock'){
            return hChoice;
        } else if (hChoice === 'paper'){
            return hChoice;
        } else if (hChoice === 'scissors'){
            return hChoice;
        } else {
            return 'Invalid Choice';
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice) {
            console.log("It's a tie!")        
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose, paper beats rock")
            ++computerScore
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win, rock beats scissors")
            ++humanScore
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win, paper beats rock")
            ++humanScore
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose, scissors beats rock")
            ++computerScore
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win, scissors beats paper")
            ++humanScore
        } else if(humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose, rock beats scissors")
            ++computerScore
        }
        console.log("Your score" + " " + humanScore + " " + "Computer Score" + " " + computerScore)
    }
    // for (let i = 0; i < 5; i ++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    if (humanScore > computerScore) {
        console.log("You win the game");
    } else if (humanScore === computerScore) {
        console.log("It's a tie");
    } else {
        console.log("You lose the game");
    }
}

playGame();
