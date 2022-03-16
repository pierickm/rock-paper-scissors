function computerPlay (){
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber == 1) {
        return "Rock";
    } else if(randomNumber == 2) {
        return "Paper";
    }else {
        return "Scissors";
    }
}
let computerSelection = computerPlay();

let playerSelection = prompt("Make your choice");

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return `It's a draw! You both chose ${playerSelection}.`;
    }else if(playerSelection == "Rock" && computerSelection != "Paper" || playerSelection == "Paper" && computerSelection != "Scissors" || playerSelection == "Scissors" && computerSelection != "Rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

console.log(playRound(playerSelection, computerSelection));