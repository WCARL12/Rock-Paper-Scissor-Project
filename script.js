// Get the starting button tag
const startButton = document.querySelector(".startBtn")

// Get the starting screen div tag
const startingScreen = document.querySelector(".start-screen")


// Get the all rock-paper-scissor buttons
const choiceButtons = document.querySelectorAll(".player-choices")

// Tracks the score of player and computer
let score = {
    playerScore: 0,
    computerScore : 0
}

// Variables to store player and computer choices
let playerChoice = "";
let computerChoice = "";



function startGame(){    

    choiceButtons.forEach(button => {
        button.style.display = "inline";

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

// startGame()

startButton.addEventListener("click", () => {
    startingScreen.style.display = "none";
    startGame()
})