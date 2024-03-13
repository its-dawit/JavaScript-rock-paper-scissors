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

    const playerSelection = "rock".toLowerCase();
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection , computerSelection));