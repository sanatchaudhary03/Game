let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice")
const para = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const genCompChoice = (compChoice) =>{
    const options = ["rock", "paper", "scissors"]
    const rndIdx = Math.floor(Math.random()*3)
    return options[rndIdx]
}

const drawGame = () =>{
    msg.innerText = "Game is draw, play agian!"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) =>{
    //generating omputer choices
     let compChoice = genCompChoice();
    
    if(userChoice === compChoice){
      // draw game
      drawGame();
    } 
    else{
        let userWin = true;
        if(userChoice == "rock"){
            // paper or scissors
             userWin = compChoice == "paper"? false : true;
        }
        else if(userChoice == "paper"){
            // rock or scissors
             userWin = compChoice == "scissors"? false : true;
        }
        else{
            //rock or paper
            userWin = compChoice == "rock"? false : true;
        }
    showWinner(userWin, userChoice, compChoice);      
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
})