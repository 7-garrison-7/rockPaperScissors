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

function getHumanChoice() {
    return(prompt("Choice: "));
}


console.log(getHumanChoice());

// console.log(getComputerChoice());