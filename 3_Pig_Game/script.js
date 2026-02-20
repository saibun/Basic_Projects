"use strict";
let playerZero = document.querySelector(".player--0");
let playerOne = document.querySelector(".player--1");
let roll_dice_btn = document.querySelector(".btn--roll");
let dice = document.querySelector(".dice");
let final_score = document.querySelector(".score");
let hold = document.querySelector(".btn--hold");

//player1 and player2 score
const scoreMembers = [0, 0];
let add_numbers = 0;
let activePlayer = 0;
let playMatch = true;
dice.classList.add("hidden");

//generate random dice number & shift the player if dice 1.
function random_roll() {
  if (playMatch) {
    let random_num = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `./images/dice-${random_num}.png`;
    if (random_num === 1) {
      switchPlayer();
    } else {
      add_numbers += random_num;
      document.getElementById(`current--${activePlayer}`).textContent =
        add_numbers;
    }
  }
}
//handel ROLL DICE button event
roll_dice_btn.addEventListener("click", random_roll);

//hold btn add current number to score & shift the player
hold.addEventListener("click", function () {
  if (playMatch) {
    scoreMembers[activePlayer] += add_numbers;
    document.getElementById(`score--${activePlayer}`).textContent =
      scoreMembers[activePlayer];
    if (scoreMembers[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      dice.classList.add("hidden");
      playMatch = false;
    } else {
      switchPlayer();
    }
  }
});

//Function to transfer the turn from one player to another.
function switchPlayer() {
  add_numbers = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle("player--active");
  playerOne.classList.toggle("player--active");
}

//Function for new game
function newGame(){
    final_score.textContent = 0;
    
}