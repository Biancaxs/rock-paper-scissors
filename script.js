function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

let humanScore = 0
let computerScore = 0 

function playGame(){

    // ComputerChoice: 1 = Rock, 2 = Paper, 3 = Scissors

    function playRound(humanChoice, computerChoice) {

        if (computerChoice === 1 && humanChoice === "paper"){
            console.log("You won! Paper beats Rock.")
            humanScore++
            
        } else if (computerChoice === 1 && humanChoice === "scissors") {
            console.log("You lose! Rock beats Scissors.")
            computerScore++
        } else if (computerChoice === 2 && humanChoice === "rock") {
            console.log("You lose! Paper beats Rock.")
            computerScore++
        } else if (computerChoice === 2 && humanChoice === "scissors") {
            console.log("You won! Scissors beats Paper.")
            humanScore++
        } else if (computerChoice === 3 && humanChoice === "rock"){
            console.log("You won! Rock beats Scissors.")
            humanScore++
        } else if (computerChoice === 3 && humanChoice === "paper") {
            console.log("You lose! Paper beats Scissors.")
            computerScore++
        } else {
            console.log("Draw!")
        }
    } 

    
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
            button.addEventListener("click", function(e){
            let userChoice = (e.target.value)

            const humanSelection = userChoice;
            const computerSelection = getComputerChoice(3);

            playRound(humanSelection, computerSelection) 
        })
    })

}

function winner() {
        if (humanScore > computerScore){
            console.log(`Congratulations! \nYour score: ${humanScore} \nComputer score: ${computerScore}`)
        } else if (computerScore > humanScore){
            console.log(`Try again! \nYour score: ${humanScore} \nComputer score: ${computerScore}`)
        } else {
            console.log(`Draw! \nYour score: ${humanScore} \nComputer score: ${computerScore}`)
        }
    }

// for (let rounds = 0; rounds < 5; rounds ++){
//     playGame()

//     if (rounds === 4){
//         winner()
//     }
    
// }

playGame()