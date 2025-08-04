let playerDisplay=document.getElementById("playerChoice");
let computerDisplay=document.getElementById("computerChoice");
let winner=document.getElementById("winner-msg");
let player=document.getElementById("player-score");
let computer=document.getElementById("computer-score");
const choices=["Rock","Paper","Scissors"];
let playerScore=0;
let computerScore=0;


function playGame(playerSelection){
    const computerSelection=choices[Math.floor(Math.random()*3)];
    result="";
    if(playerSelection==computerSelection){
        result ="It's a TIE!";
    }
    else{
        const win=(playerSelection=="Rock" && computerSelection=="Scissors") ||
                  (playerSelection=="Paper" && computerSelection=="Rock")||
                  (playerSelection=="Scissors" && computerSelection=="Paper")
        if(win){
            result="You won!😀";
            playerScore++;
        }
        else{
            result="You lose!🙃";
            computerScore++;
        }
    }
    playerDisplay.textContent=`You : ${playerSelection}`;
    computerDisplay.textContent=`Computer : ${computerSelection}`;
    winner.textContent=result;
    player.textContent=playerScore;
    computer.textContent=computerScore;
}