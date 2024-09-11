// console.log("Hello World");

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
    
        // win
        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beat paper");
            humanScore++;
        } else if (computerChoice == "paper" && humanChoice == "rock") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        } else if (computerChoice == "rock" && humanChoice == "scissors") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        } else if (computerChoice == "scissors" && humanChoice == "paper") {
            console.log("You lose! Scissors beat paper");
            computerScore++;
        } else if (computerChoice == humanChoice) {
            console.log("Tie!");
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();