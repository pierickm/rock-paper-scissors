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
let computerSelection = "";

let playerSelection = "";
const results = document.querySelector('div');
const score = document.querySelector('p');

let playerScore = 0;

let computerScore = 0;




const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            button.classList.add('pressed');
            setTimeout(() => {
                button.classList.remove('pressed');
            }, 100);
            playerSelection = button.value;
            computerSelection = computerPlay();
            results.textContent = (playRound(playerSelection, computerSelection));
            if(playerScore >= 5 || computerScore >= 5) {
                if(playerScore == computerScore){
                    alert (`It's a draw! You both won ${playerScore} games.`);
                }else if(playerScore > computerScore) {
                    alert(`Congrats! You won with a score of ${playerScore} : ${computerScore}`);
                }else {
                    alert(`You lose! The final score is ${playerScore} : ${computerScore}.`);
                };
            };
        });
    });
    

    function playRound(playerSelection, computerSelection){
        
        if(playerSelection == computerSelection) {
            score.textContent = `The score is ${playerScore} : ${computerScore}`;
            return `It's a draw! You both chose ${playerSelection}.`;
        }else if(playerSelection == "rock" &&               computerSelection != "paper" || playerSelection == "paper" && computerSelection != "scissors" || playerSelection == "scissors" && computerSelection != "rock") {
            playerScore++;
            score.textContent = `The score is ${playerScore} : ${computerScore}`;
            return `You win! ${playerSelection} beats ${computerSelection}` 
        }else {
            computerScore++;
            score.textContent = `The score is ${playerScore} : ${computerScore}`;
            return `You lose! ${computerSelection} beats ${playerSelection}`
        };   
    };

    

 

   