function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

console.log(getComputerChoice(3))

function getHumanChoice(){
    return window.prompt("Choose a number: 1 - Rock, 2 - Paper or 3 - Scissors")
}

console.log(getHumanChoice())