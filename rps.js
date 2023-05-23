let draws=0;
let playerWins=0;
let computerWins=0;
function getComputerChoice(){
const choices=["Rock", "Paper", "Scissor"];
let index=Math.floor(Math.random() * 3);
let finalChoice= choices[index];
return finalChoice;
}

function playRound(playerSelection, computerSelection){
if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
draws +=1;
return "Draw! You both chose the same."
}
else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="paper"){
computerWins +=1;
return "Computer Wins! Paper beats Rock"
}
else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="scissor"){
playerWins +=1;
return "You Win! Rock beats scissor"
}
else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="rock"){
playerWins +=1;
return "You Win! Paper beats Rock"
}
else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="scissor"){
computerWins +=1;   
return "Computer Wins! Scissors cut paper"
}
else if(playerSelection.toLowerCase()=="scissor" && computerSelection.toLowerCase()=="rock"){
computerWins +=1;
return "Computer Wins! Rock beats scissors"
}
else if(playerSelection.toLowerCase()=="scissor" && computerSelection.toLowerCase()=="paper"){
playerWins +=1;
return "You Win! Scissors cut paper"
}
}
function game(){
for(let i=0;i<5;i++){
    let playerSelection = prompt("Rock, Paper or Scissor", "Rock");
    const computerSelection = getComputerChoice();
    console.log("Game Number "+ (i+1) +": " + playRound(playerSelection,computerSelection));
}
console.log("Total Draws: " + draws);
console.log("Total Player Wins: " + playerWins);
console.log("Total Computer Wins: " + computerWins);
}
game();