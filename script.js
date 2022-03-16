function computerPlay (){
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber == 1) {
        return "rock";
    } else if(randomNumber == 2) {
        return "paper";
    }else {
        return "scissors";
    }
}
 let computerSelection = computerPlay();



let playerScore = 0;

let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == computerSelection) {
        return `It's a draw! You both chose ${playerSelection}.`;
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection != "paper" || playerSelection.toLowerCase() == "paper" && computerSelection != "scissors" || playerSelection.toLowerCase() == "scissors" && computerSelection != "rock") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}` 
    }else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = (prompt("Make your choice"));
        console.log(playRound(playerSelection, computerSelection));
        console.log(`The score is ${playerScore} : ${computerScore}`);
    };
    if(playerScore == computerScore){
        console.log(`It's a draw! You both won ${playerScore} games.`);
    }else if(playerScore > computerScore) {
        console.log(`Congrats! You won with a score of ${playerScore} : ${computerScore}`);
    }else {
        console.log(`You lose! The final score is ${playerScore} : ${computerScore}.`);
    };
    
}
game();