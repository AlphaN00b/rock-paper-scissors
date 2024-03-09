const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerscore = document.querySelector("#player");
const computerScore = document.querySelector("#pc");
const replay = document.querySelector("#replay");
const rplBtn = document.createElement("button");
rplBtn.textContent = "Play Again";

let rps = ["rock", "paper", "scissors"];
let pChoice;
let playerChoice;
let pScore = 0;
let pcScore = 0;

rockBtn.onclick = function() {
    playerChoice = "rock";
    playRound();
}

paperBtn.onclick = function() {
    playerChoice = "paper";
    playRound();
}

scissorsBtn.onclick = function() {
    playerChoice = "scissors";
    playRound();
}

function getComputerChoice(){
    let randChoices = Math.floor(Math.random() * 3);
    pChoice = rps[randChoices]; 
    return pChoice;
}

rplBtn.onclick = function() {
    pScore = 0;
    pcScore = 0;
    result.textContent = "Make your choice!";
    displayResults();
    replay.innerHTML = "";
}

function playRound(){

    if (pScore == 5 || pcScore == 5) {
        pass
    }
    else {
        getComputerChoice();

        if (playerChoice == "rock"){
            if(pChoice == "scissors"){
                result.textContent = "you win!"
                pScore += 1;
            }
            else if(pChoice == "paper"){
                result.textContent = "you lose!"
                pcScore += 1;
            } else {
                result.textContent = "it's a draw!"
            }
        }
        else if (playerChoice == "scissors"){
            if(pChoice == "paper"){
                result.textContent = "you win!"
                pScore += 1;
            }
            else if(pChoice == "rock"){
                result.textContent = "you lose!"
                pcScore += 1;
            } else {
                result.textContent = "it's a draw!"
            }
        } 
        else if (playerChoice == "paper"){
            if(pChoice == "rock"){
                result.textContent = "you win!"
                pScore += 1;
            }
            else if(pChoice == "scissors"){
                result.textContent = "you lose!"
                pcScore += 1;
            } else {
                result.textContent = "it's a draw!"
            }
        }
        displayResults()
    }
}

function displayResults() {
    playerscore.textContent = `Player: ${pScore}`;
    computerScore.textContent = `Computer: ${pcScore}`;

    if (pcScore == 5 ) {
        result.textContent = "you lost the game!"
        replay.appendChild(rplBtn);
    } 
    else if (pScore == 5) {
        result.textContent = "you won the game!"
        replay.appendChild(rplBtn);
    }
}