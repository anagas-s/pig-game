'use strict';
//Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El =document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

diceEl.classList.add('hidden');

let currentScore =0;

//Rolling dice functionality
btnRoll.addEventListener('click', () => {
    const dice = Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove('hidden');
    diceEl.src = `./images/dice-${dice}.png`;


    if(dice!==1){
        currentScore+=dice;
        current0El.textContent =currentScore;
    }else {

    }
})