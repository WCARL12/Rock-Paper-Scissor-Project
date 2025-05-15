const rockButton = document.querySelector(".rockBtn")
const paperButton = document.querySelector(".paperBtn")
const scissorsButton = document.querySelector(".scissorsBtn")


rockButton.addEventListener("click", () => {
    
    
})

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3 + 1)
    console.log(randomNumber);
    
}

getComputerChoice()