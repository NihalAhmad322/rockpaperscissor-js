let draws = 0;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
const choices=["Rock", "Paper", "Scissor"];
let index=Math.floor(Math.random() * 3);
let finalChoice= choices[index];
return finalChoice;
}

function playRound(playerSelection, computerSelection){
if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
draws +=1;
let statement = "Draw! You both chose the same.";
return statement;
}
else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="paper"){
computerWins +=1;
let statement = "Computer Wins! Paper beats Rock";
return statement;
}
else if(playerSelection.toLowerCase()=="rock" && computerSelection.toLowerCase()=="scissor"){
playerWins +=1;
let statement = "You Win! Rock beats scissor";
return statement;
}
else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="rock"){
playerWins +=1;
let statement = "You Win! Paper beats Rock";
return statement;
}
else if(playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="scissor"){
computerWins +=1;   
let statement = "Computer Wins! Scissor cuts paper";
return statement;
}
else if(playerSelection.toLowerCase()=="scissor" && computerSelection.toLowerCase()=="rock"){
computerWins +=1;
let statement = "Computer Wins! Rock beats scissors";
return statement;
}
else if(playerSelection.toLowerCase()=="scissor" && computerSelection.toLowerCase()=="paper"){
playerWins +=1;
let statement = "You Win! Scissors cut paper";
return statement;
}
}

/*function game(){
for(let i=0;i<5;i++){
    let playerSelection = prompt("Rock, Paper or Scissor", "Rock");
    const computerSelection = getComputerChoice();
    console.log("Game Number "+ (i+1) +": " + playRound(playerSelection,computerSelection));
}
console.log("Total Draws: " + draws);
console.log("Total Player Wins: " + playerWins);
console.log("Total Computer Wins: " + computerWins);
}
game();*/
function game_rock(){
    let playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    div.textContent = `Total Player Wins: ${playerWins} and Total CPU Wins ${computerWins}`;
    if(playerWins == 5){
        div.appendChild(winner);
    }
    else if(computerWins == 5){
        div.appendChild(winnerComputer);
    }
}

function game_paper(){
    let playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    div.textContent = `Total Player Wins: ${playerWins} and Total CPU Wins ${computerWins}`;
    if(playerWins == 5){
        div.appendChild(winner);
    }
    else if(computerWins == 5){
        div.appendChild(winnerComputer);
    }
}

function game_scissor(){
    let playerSelection = "Scissor";
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    div.textContent = `Total Player Wins: ${playerWins} and Total CPU Wins ${computerWins}`;
    if(playerWins == 5){
        div.appendChild(winner);
    }
    else if(computerWins == 5){
        div.appendChild(winnerComputer);
    }
}

const btn_rock = document.querySelector('.rock');
btn_rock.addEventListener('click',game_rock);

const btn_paper = document.querySelector('.paper');
btn_paper.addEventListener('click',game_paper);

const btn_scissor = document.querySelector('.scissor');
btn_scissor.addEventListener('click',game_scissor);

const div = document.createElement('div');
div.textContent = `Total Player Wins: ${playerWins} and Total CPU Wins ${computerWins}`;
div.setAttribute('id','result');
div.style.cssText = 'color: blue; background: white;';
const textDiv = document.querySelector('.text');
textDiv.appendChild(div);

const winner = document.createElement('h1');
winner.textContent = "The Player Wins!"
winner.style.cssText = 'color: blue; background: white;';

const winnerComputer = document.createElement('h1');
winnerComputer.textContent = "The Computer Wins!"
winnerComputer.style.cssText = 'color: red; background: white;';