// const rockButton = document.querySelector(".rockBtn")
// const paperButton = document.querySelector(".paperBtn")
// const scissorsButton = document.querySelector(".scissorsBtn")

const buttons = document.querySelectorAll("button")

let score = {
    playerScore: 0,
    computerScore : 0
}


let playerChoice = "";
let computerChoice = "";

function startGame(){
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            
            
            playerChoice = button.textContent;
            computerChoice = getComputerChoice()
            getOutcome()
            displayScores()

        })
    })    

    
}

function getComputerChoice(){

    // Get a random number from 1-3 
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    // console.log(randomNumber);

    if (randomNumber === 1){
        return "rock"
    }

    else if (randomNumber === 2){
        return "paper"
    }


    return "scissors"
    
}

function getOutcome(){
    if (playerChoice === "rock" && computerChoice === "scissors"){
        score.playerScore += 1; 
        console.log("You won");
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        score.playerScore += 1; 
        console.log("You won");
    }
    else if (playerChoice === "scissors" && computerChoice === "paper"){
        score.playerScore += 1; 
        console.log("You won");
    }
    else if (playerChoice === computerChoice){
        console.log("Same choices, play again"); 
    }
    else{
        console.log("You lost");
        score.computerScore += 1; 
    }
}

function displayScores(){
    console.log(`Player Score: ${score.playerScore}\nComputer Score: ${score.computerScore}`)
}

startGame()