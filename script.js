function getComputerChoice() {
    let value = Math.random()
    if (value > 0 && value <= 0.33) {
        return "rocks"
    } else if (value > 0.33 && value <= 0.66) {
        return "scissors"
    } else {
        return "paper"
    }
}

let computerChoice = getComputerChoice();

function getHumanChoice() {
    let choice = prompt("Choose rocks, scissors or paper!");
    return choice;
};

let humanChoice = getHumanChoice();

console.log(computerChoice)
console.log(humanChoice)