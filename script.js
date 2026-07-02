function getComputerChoice(max){
    return Math.floor(Math.random() * max);
}

let roundText = "Round: "
let round = 1

let humanScore = 0
let computerScore = 0 

function playGame(){

    const roundResult = document.querySelector(".round-result")
    const playerScr = document.querySelector(".player-score")
    const computerScr = document.querySelector(".computer-score")
    const winner = document.querySelector(".winner")
    const rnd = document.querySelector(".round")


    // ComputerChoice: 1 = Rock, 2 = Paper, 3 = Scissors

    function playRound(humanChoice, computerChoice) {

        if (computerChoice === 1 && humanChoice === "paper"){

            round++
            rnd.textContent = roundText + round

            humanScore++
            playerScr.textContent = humanScore

            roundResult.textContent = "You win!"

        } else if (computerChoice === 1 && humanChoice === "scissors") {

            round++
            rnd.textContent = roundText + round

            computerScore++
            computerScr.textContent = computerScore

            roundResult.textContent = "You lose!"

        } else if (computerChoice === 2 && humanChoice === "rock") {

            round++
            rnd.textContent = roundText + round

            computerScore++

            computerScr.textContent = computerScore
            roundResult.textContent = "You lose!"

        } else if (computerChoice === 2 && humanChoice === "scissors") {

            round++
            rnd.textContent = roundText + round

            humanScore++
            playerScr.textContent = humanScore

            roundResult.textContent = "You win!"

        } else if (computerChoice === 3 && humanChoice === "rock"){

            round++
            rnd.textContent = roundText + round

            humanScore++
            playerScr.textContent = humanScore

            roundResult.textContent = "You win!"

        } else if (computerChoice === 3 && humanChoice === "paper") {

            round++
            rnd.textContent = roundText + round

            computerScore++
            computerScr.textContent = computerScore

            roundResult.textContent = "You lose!"

        } else {

            round++
            rnd.textContent = roundText + round

            roundResult.textContent = "Tie!"

        }



        if (humanScore ===  5){
            winner.textContent = "Result of the last match: You won!"

            humanScore = 0
            computerScore = 0
            round = 1

            playerScr.textContent = humanScore
            computerScr.textContent = computerScore
            rnd.textContent = roundText + round

        } else if (computerScore === 5){
            winner.textContent = "Result of the last match: You lose..."
            
            humanScore = 0
            computerScore = 0
            round = 1
            
            playerScr.textContent = humanScore
            computerScr.textContent = computerScore
            rnd.textContent = roundText + round
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




playGame()