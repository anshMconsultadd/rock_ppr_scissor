let playerScore=0
let computerScore=0;

const resultMessage=document.getElementById('result-message');
const playerScoreDisplay=document.querySelector('.player-score');
const computerScoreDisplay=document.querySelector('.computer-score');

const choices =[ 'rock', 'paper', 'scissors'];

choices.forEach((choice)=>{
    const selectedButton=document.getElementById(choice);
    selectedButton.addEventListener('click',()=> playerChoice(choice));
})

function computerChoice(){
   const randomIndex=Math.floor(Math.random()*3);
   return choices[randomIndex];
}


function playerChoice(parameterChoice){
    console.log(parameterChoice);
    const getComputerChoice=computerChoice();
    console.log(getComputerChoice);
    const winner=decideWinner(parameterChoice,getComputerChoice);
    console.log(resultMessage.textContent);
    if(winner=="player"){
        resultMessage.textContent=`You picked ${parameterChoice} and computer picked ${getComputerChoice}. You win!`;
    }
    else if(winner=="computer"){
        resultMessage.textContent=`You picked ${parameterChoice} and computer picked ${getComputerChoice}. Computer wins!`;
    }
    else {
        resultMessage.textContent=`You picked ${parameterChoice} and computer picked ${getComputerChoice}. It's a draw!`;
    }
}

function decideWinner(getPlayerChoice,getComputerChoice){
    if(getPlayerChoice==getComputerChoice) return "draw";
    else if(getPlayerChoice==="rock" && getComputerChoice==="scissors" 
        || getPlayerChoice==="scissors" && getComputerChoice==="paper" 
        || getPlayerChoice==="paper" && getComputerChoice==="rock"){
        playerScore++;
        playerScoreDisplay.textContent=playerScore;
        return "player";
        }
        else {
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            return "computer";
        }
}