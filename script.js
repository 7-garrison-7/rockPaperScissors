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

const rockBut = document.querySelector('#rock');
const paperBut = document.querySelector('#paper');
const scissorsBut = document.querySelector('#scissors');

const results = document.querySelector('#results');

rockBut.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
});

paperBut.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
});

scissorsBut.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});

// function playGame() {

    function getHumanChoice() {
        return(prompt("Choice: "));
    }    

    function playRound(humanChoice, computerChoice) {
        
        let message;

        if (humanScore < 5 && computerScore < 5) {
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

            results.textContent = message + "\nYour score: " + humanScore + "\nComputer score: " + computerScore;
        } else if (humanScore >= 5) {
            results.textContent = "You win the game!";
        } else {
            results.textContent = "You lose the game!";
        }

        // let winnerDecided = false;

        // if (humanScore >= 5 && !winnerDecided ) {
        //     results.textContent = "You win the game!";
        //     winnerDecided = true;
        // } else if (computerScore >= 5 && !winnerDecided) {
        //     
        //     winnerDecided = true;
        // } else {
        //     
        // }

        // results.textContent = postRoundMsg;
    }
    



// }

// playGame();