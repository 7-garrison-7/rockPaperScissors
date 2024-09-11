let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rand = Math.random();
    if (rand <= (1/3)) {
        return "rock";
    } else if (rand <= (2/3)) {
        return "paper";
    } else {
        return "scissors";
    }
}



function playGame() {

    function getHumanChoice() {
        return(prompt("Choice: "));
    }    

    function playRound(humanChoice, computerChoice) {
        
        let message;

        if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            message = "You win! Paper beats rock";
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            message = "You win! Rock beats scissors";
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            message = "You win! Scissors beat paper";
            humanScore++;
        } else if (computerChoice == "paper" && humanChoice == "rock") {
            message = "You lose! Paper beats rock";
            computerScore++;
        } else if (computerChoice == "rock" && humanChoice == "scissors") {
            message = "You lose! Rock beats scissors";
            computerScore++;
        } else if (computerChoice == "scissors" && humanChoice == "paper") {
            message = "You lose! Scissors beat paper";
            computerScore++;
        } else if (computerChoice == humanChoice) {
            message = "Tie!";
        }

        let postRoundMsg = message + "\nYour score: " + humanScore + "\nComputer score: " + computerScore;
        console.log(postRoundMsg);
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();