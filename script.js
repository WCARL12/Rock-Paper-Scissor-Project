const rockButton = document.querySelector(".rockBtn")
const paperButton = document.querySelector(".paperBtn")
const scissorsButton = document.querySelector(".scissorsBtn")

let computerChoice = "";

rockButton.addEventListener("click", () => {
    
    
})

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

// computerChoice = getComputerChoice()


