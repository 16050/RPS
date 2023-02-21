function playRound(playerSelection, computerSelection) {
  // your code here!
  if (playerSelection.toUpperCase() == "PAPER" && computerSelection == "ROCK"){
      return "you won";
  }
  if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "PAPER"){
    return "you won";
  }
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection == "SCISSORS"){
    return "you won";
  }
  if (playerSelection.toUpperCase() == computerSelection){
    return "tie";
  }
  else{
    return "you lose";
  }
}

var computerSelection = "";
var playerSelection = "";

function game(){
  for (let i = 0; i < 5; i++) {
    var won = 0;
    var lost = 0;
    computerSelection = getComputerChoice();
    playerSelection = prompt("user choice");
    const result = playRound(playerSelection, computerSelection);
    console.log(playerSelection, computerSelection);
    if (result == "you won"){
      won++;
    }
    if (result == "you lost"){
      lost++;
    }
  }
  if (won>lost){
    return "you won";
  }
  if (won<lost){
    return "you lost";
  }
  else{
    return "tie";
  }
}

function getComputerChoice(){
  const choice = ["ROCK", "PAPER", "SCISSORS"];
  return choice[Math.floor(Math.random() * 3)]
}

console.log(game());