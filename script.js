// Get the starting button tag
const startButton = document.querySelector(".startBtn")

// Get the various screen div tag
const startingScreen = document.querySelector(".start-screen")
const inGameScreen = document.querySelector(".in-game-screen")
const selectedChoiceScreen = document.querySelector(".selected-choices-screen")
const displayScores = document.querySelector(".score-screen")
const endingScreen = document.querySelector(".ending-screen")


// Get the all rock-paper-scissor buttons
const choiceButtons = document.querySelectorAll(".player-choice")
const continueButton = document.querySelector(".continue-button")
const playAgainButton = document.querySelector(".play-again")

// Choices 

const playerSelectionDisplay = document.querySelector(".player-selection")
const computerSelectionDisplay = document.querySelector("computer-selection")

// Targeting HTML tags to update scores

const playerScoreTag = document.querySelector(".player-score")
const computerScoreTag = document.querySelector(".computer-score")


// Variables for displaying the image of player and computer's selected choice
const displayPlayerChoiceImg = document.querySelector(".player-selection-img")
const displayComputerChoiceImg = document.querySelector(".computer-selection-img")

// Variables for displaying the text of player and computer's selected choice
const displayPlayerChoiceText = document.querySelector(".player-selection-text")
const displayComputerChoiceText = document.querySelector(".computer-selection-text")

const resultText = document.querySelector(".result")

const winnerText = document.querySelector(".winner")




// Tracks the score of player and computer
let score = {
    playerScore: 0,
    computerScore : 0
}

// Variables to store player and computer choices
let playerChoice = "";
let computerChoice = "";



startButton.addEventListener("click", () => {
    startGame()
})


function startGame(){   
    startingScreen.style.display = "none";
    endingScreen.style.display = "none";
    updateScores()

    displayScores.style.display = "flex";
    inGameScreen.style.display = "block";
    selectedChoiceScreen.style.display = "none";

    console.log(score);
    
    
    choiceButtons.forEach(button => {
        button.addEventListener("click", () => {
            const imageSrc = button.src.split("/").at(-1);
            playerChoice = imageSrc.substring(0, imageSrc.length - 4);
            computerChoice = getComputerChoice();
            
            getOutcome();
            updateScores();
            displayChoices()
           
        });
    });

    continueButton.addEventListener("click", () => {
        continueGame()
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
        resultText.textContent = "Player has received a point!"
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        score.playerScore += 1; 
        resultText.textContent = "Player has received a point!"
    }
    else if (playerChoice === "scissors" && computerChoice === "paper"){
        score.playerScore += 1; 
        resultText.textContent = "Player has received a point!"
    }
    else if (playerChoice === computerChoice){
        resultText.textContent = "Same choices, try again" 
    }
    else{
        score.computerScore += 1; 
        resultText.textContent = "Computer has received a point!"
    }
}


function displayChoices(){
    inGameScreen.style.display = "none";
    selectedChoiceScreen.style.display = "block"
    
    displayPlayerChoiceImg.src = `./img/${playerChoice}.png`
    displayComputerChoiceImg.src = `./img/${computerChoice}.png`

    displayPlayerChoiceText.textContent = `${playerChoice.toUpperCase()}`
    displayComputerChoiceText.textContent = `${computerChoice.toUpperCase()}`
    
}


function updateScores(){
    playerScoreTag.textContent = `${score.playerScore}`;
    computerScoreTag.textContent = `${score.computerScore}`;
}


function continueGame(){
    if (score.playerScore === 3 || score.computerScore === 3){
          displayEndingScreen()  

    }
    else {
        inGameScreen.style.display = "block";
        selectedChoiceScreen.style.display = "none";
    }
}

function displayEndingScreen(){
    selectedChoiceScreen.style.display = "none";
    endingScreen.style.display = "flex"
    displayScores.style.display = "none";
    
    if (score.playerScore === 3){
        winnerText.textContent = "Player"
    }
    else{
        winnerText.textContent = "Computer"
    }

    // playAgainButton.addEventListener("click", () => {
    //     score.playerScore = 0;
    //     score.computerScore = 0; 

    //     startGame()
    // })
    
    
}