let rps = ["rock", "paper", "scissors"];
let pChoice;

playRound();

function getComputerChoice(){
    let randChoices = Math.floor(Math.random() * 3);
    pChoice = rps[randChoices]; 
    return pChoice;
}

function playRound(){
    let pScore = 0;
    let pcScore = 0;
    
    while (true){
        getComputerChoice();
        let playerChoice = window.prompt('enter "rock","paper","scissors" or "q" to quit: ').toLowerCase();
        if (playerChoice == "q"){
            break;
        }
        else if (playerChoice == "rock"){
            if(pChoice == "scissors"){
                console.log("you win!");
                pScore += 1;
            }
            else if(pChoice == "paper"){
                console.log("you lose!");
                pcScore += 1;
            } else {
                console.log("it's a draw!");
            }
        }
        else if (playerChoice == "scissors"){
            if(pChoice == "paper"){
                console.log("you win!");
                pScore += 1;
            }
            else if(pChoice == "rock"){
                console.log("you lose!");
                pcScore += 1;
            } else {
                console.log("it's a draw!");
            }
        } 
        else if (playerChoice == "paper"){
            if(pChoice == "rock"){
                console.log("you win!");
                pScore += 1;
            }
            else if(pChoice == "scissors"){
                console.log("you lose!");
                pcScore += 1;
            } else {
                console.log("it's a draw!");
            }
        }
    }
    if(pScore > pcScore){
        console.log("you won the game!");
        console.log(`Player: ${pScore}`);
        console.log(`Computer: ${pcScore}`);
    }
    else if(pScore < pcScore){
        console.log("you lost the game!");
        console.log(`Player: ${pScore}`);
        console.log(`Computer: ${pcScore}`);
    }
    else if(pScore == pcScore){
        console.log("the game is a draw!");
        console.log(`Player: ${pScore}`);
        console.log(`Computer: ${pcScore}`);
    }
}