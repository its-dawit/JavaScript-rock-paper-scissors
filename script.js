function getComputerChoice(){

    var choice = Math.random();
if (choice <= 0.34) {
    choice = "rock";
} else if (choice <= 0.67) {
    choice = "paper";
} else {
    choice = "scissors";
}
return choice;

}

function playRound(playerSelection , computerSelection){


    if(playerSelection == "rock" && computerSelection == "scissors")
    return "You Win! Rock beats Scissors!";

    if(playerSelection == "rock" && computerSelection == "paper")
    return "You Lose! Paper beats Rock!";

    if(playerSelection == "paper" && computerSelection == "scissors")
    return "You Lose! Scissors beats Paper";

    if(playerSelection == "paper" && computerSelection == "rock")
    return "You Win! Paper beats Rock!";
    
    if(playerSelection == "scissors" && computerSelection == "rock")
    return "You Lose! Rock beats Scissors";

    if(playerSelection == "scissors" && computerSelection == "paper")
    return "You Win! Scissors beats Paper!";

    if(playerSelection == "paper" && computerSelection == "paper")
    return "It's a Tie!";

    if(playerSelection == "scissors" && computerSelection == "scissors")
    return "It's a Tie!";
 
    if(playerSelection == "rock" && computerSelection == "rock")
    return "It's a Tie!";
    
}

   function playGame(){ 
    let playerScore = 0;
    let computerScore = 0;
    
    for(var i = 0; i < 5; i++ ){
        const playerSelection = prompt("Select your action").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection , computerSelection));

        if(playRound(playerSelection , computerSelection) == "You Win! Scissors beats Paper!" 
        || playRound(playerSelection , computerSelection) == "You Win! Paper beats Rock!"
        || playRound(playerSelection , computerSelection) == "You Win! Rock beats Scissors!")
        playerScore++;
        else if(playRound(playerSelection , computerSelection) == "You Lose! Paper beats Rock!"
                || playRound(playerSelection , computerSelection == "You Lose! Rock beats Scissors")
                || playRound(playerSelection , computerSelection) == "You Lose! Scissors beats Paper")
                computerScore++;
    }
        console.log("Win = " + playerScore + " , Lose = " + computerScore);
   }

   playGame();

