let humanScore = 0
let computerScore = 0

function getHumanChoice() {
    let keepGoing = true
    while(keepGoing) {
        let choice = prompt("Choose rock, paper or scissors!").toLowerCase();
        if (choice === "rock" || choice === "scissors" || choice === "paper") {
            keepGoing = false;
            return choice;
        } else {
            alert("Choose a proper answer!");
        }
    }
}

function getComputerChoice() {
    let value = Math.random()
    if (value > 0 && value <= 0.33) {
        return "rock"
    } else if (value > 0.33 && value <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log(`Computer chooses: ${computerChoice}`);
    console.log(`Human chose: ${humanChoice}`);
    if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            humanScore++;
            console.log("You won the round!")
        } else if (humanChoice === "scissors") {
            computerScore++;
            console.log("You lost the round!")
        } else {
            console.log("It's a draw, play again");
        }
    }
    if (computerChoice === "paper") {
        if (humanChoice === "paper") {
            humanScore++;
            console.log("You won the round!")
        } else if (humanChoice === "rock") {
            computerScore++;
            console.log("You lost the round!")
        } else {
            console.log("It's a draw, play again");
        }
    }
    if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            humanScore++;
            console.log("You won the round!")
        } else if (humanChoice === "paper") {
            computerScore++;
            console.log("You lost the round!")
        } else {
            console.log("It's a draw, play again");
        }
    }
    console.log(`Your score is: ${humanScore}`);
    console.log(`Computer's score is: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i <= 5; i++)
        playRound();
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if  ( humanScore < computerScore) {
        console.log("You lost the game");
    } else {
        console.log("It's a draw!")
    }
}