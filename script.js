function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

console.log(getComputerChoice(3))

function getHumanChoice(){
    return window.prompt("Rock, Paper or Scissors?")
}

console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

