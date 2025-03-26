'use strict';
let playerZero = document.querySelector('.player--0');
let playerOne = document.querySelector('.player--1');
let roll_dice_btn = document.querySelector('.btn--roll');
let dice = document.querySelector('.dice');
let final_score = document.querySelector('.score');
let hold = document.querySelector('.btn--hold');
const scoreMembers = [0,0];
let add_numbers = 0;
let activePlayer = 0;
dice.classList.add('hidden');
function random_roll(){
    let random_num = Math.trunc(Math.random()*6)+1;
    dice.classList.remove('hidden');
    dice.src = `./images/dice-${random_num}.png`;
    if(random_num === 1){
        add_numbers=0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;    
        activePlayer = activePlayer === 0 ? 1:0;
        playerZero.classList.toggle('player--active');
        playerOne.classList.toggle('player--active');
        

       

    }else{
        add_numbers +=random_num;
        document.getElementById(`current--${activePlayer}`).textContent = add_numbers;

    }  
    
    

}

roll_dice_btn.addEventListener('click',random_roll);
hold.addEventListener('click', function(){
    scoreMembers[activePlayer] += add_numbers;
    document.getElementById(`score--${activePlayer}`).textContent = scoreMembers[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
    activePlayer = activePlayer === 0 ? 1:0;
    playerZero.classList.toggle('player--active');
    playerOne.classList.toggle('player--active');
    add_numbers = 0;

})