function computerGuess() {
    let guess = Math.floor(Math.random() * 3);
    switch(guess) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function playerGuess() {
    let guess = prompt("Rock, paper or scissors?")
    let rpsArray = ["rock", "paper", "scissors"]
    guess = guess.toLowerCase
    if (rpsArray.includes(guess) == true) {
        return guess;
    } else {
        playerGuess();
    }
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Tie game, no one wins this time.")
    } else if ((playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection ==="paper")) {
        playerScore++;
        console.log(`You win!`);
    } 
}
