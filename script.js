"use strict";
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let randNo = Math.floor(Math.random() * choices.length);
  return choices[randNo];
}

function playRound(playerSelection, computerSelection) {

  if(playerSelection === computerSelection) {
    alert("It's a draw");
    return 0;
  }
  else if(playerSelection === "rock") {
    if(computerSelection === "paper") {
      alert("You Lose! Paper beats Rock");
      return -1;
    }
    alert("You Win! Rock beats Scissors");
    return 1;
  }
  else if(playerSelection === "paper") {
    if(computerSelection === "rock") {
      alert("You Win! Paper beats Rock");
      return 1;
    }
    alert("You Lose! Scissors beats Paper");
    return -1;
  }
  else {
    if(computerSelection === "rock") {
      alert("You Lose! Rock beats Scissors");
      return -1;
    }
    alert("You Win! Scissors beats Paper");
    return 1;
  }

}

function game() {
  let playerSelection;
  let computerSelection;
  let NO_GAMES = parseInt(prompt("No of rounds: "));
  let winCount = 0;
  let drawCount = 0;
  for(let i = 0; i < NO_GAMES; i++) {
    playerSelection = prompt("Enter your choice rock/paper/scissors: ").trim().toLowerCase();
    computerSelection = computerPlay();
    let gameStatus = playRound(playerSelection, computerSelection);
    switch(gameStatus) {
      case 1:
        winCount++;
        break;
      case 0:
        drawCount++;
        break;
      default:
        break;
    }
  }
  alert(`Final stats:\nPlayed: ${NO_GAMES} Won: ${winCount} Draw: ${drawCount}`);
}

game();