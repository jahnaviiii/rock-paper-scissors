const options =['rock','paper','scissors'];
let playerScore=0,computerScore=0;
function getComputerChoice() {
    return options[Math.floor(Math.random()*3)]
}
function rps(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    
    if((playerSelection=='rock' && computerSelection=='scissors') ||
    (playerSelection=='scissors' && computerSelection=='paper')||
    (playerSelection=='paper' && computerSelection=='rock'))
        playerScore++;
    else if((playerSelection=='scissors' && computerSelection=='rock') ||
    (playerSelection=='paper' && computerSelection=='scissors')||
    (playerSelection=='rock' && computerSelection=='paper'))
        computerScore++;
}
function winner(playerScore,computerScore){
    if(playerScore>computerScore)
        return 'player is the winner! Computer lost';
    else if(computerScore>playerScore)
        return 'computer is the winner! Better luck next time!!';
    else if(playerScore==computerScore)
        return 'Its a tie!!'
    
}

function game(){
    for(let i=0;i<6;i++){
        let computerSelection=getComputerChoice();
        

        let playerSelection=prompt("Enter your choice: Rock, Paper, or Scissors!!");

        playerSelection=playerSelection.toLowerCase();

        if(playerSelection!='rock' || playerSelection!='paper' || playerSelection!='scissors'){
            console.log('Invalid Output!! \n\n Refresh the page and try again later!')
        }
        console.log('You selected ',playerSelection);
        console.log('Computer selected ',computerSelection);

        rps(playerSelection,computerSelection);

        
    }

}

game();
console.log("Your score: ",playerScore);
console.log("Computer score: ",computerScore);
console.log(winner(playerScore,computerScore));

