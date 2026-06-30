function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

function getHumanChoice(){
    const userInput = window.prompt("Rock, Paper or Scissors?")
    return userInput.toLowerCase()
}


let humanScore = 0
let computerScore = 0


// ComputerChoice: 1 = Rock, 2 = Paper, 3 = Scissors

function playRound(humanChoice, computerChoice) {

        if (computerChoice === 1 && humanChoice === "paper"){
            console.log("You won! Paper beats Rock.")
            humanScore += 1
        } else if (computerChoice === 1 && humanChoice === "scissors") {
            console.log("You lose! Rock beats Scissors.")
            computerScore += 1
        } else if (computerChoice === 2 && humanChoice === "rock") {
            console.log("You lose! Paper beats Rock.")
            computerScore += 1
        } else if (computerChoice === 2 && humanChoice === "scissors") {
            console.log("You won! Scissors beats Paper.")
            humanScore += 1
        } else if (computerChoice === 3 && humanChoice === "rock"){
            console.log("You won! Rock beats Scissors.")
            humanScore += 1
        } else if (computerChoice === 3 && humanChoice === "paper") {
            console.log("You lose! Paper beats Scissors.")
            computerScore += 1
        } else {
            console.log("Draw!")
        }
           
    } 



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

playRound(humanSelection, computerSelection);
