'use strict';
// bring in html elements
const rollBtn = document.getElementById('roll-btn');
const resetBtn = document.getElementById('reset-btn');
const playerOneScore = document.querySelector('.player-1-score');
const playerTwoScore = document.querySelector('.player-2-score');
const playerCardOne = document.querySelectorAll('.player-card')[0];
const playerCardTwo = document.querySelector('.player-card-2')



const diceImg1 = document.querySelector('.dice-img-1');
const diceImg2 = document.querySelector('.dice-img-2');
let currentScore1 = 0;
let currentScore2 = 0;
let playing = true;
// initalize game

function initalizeGame(){
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    // hide winner message and modals
    // add modal for player name 1 & player name 2;
    diceImg1.src = "/img/dice-1.png"
    diceImg2.src = "/img/dice-2.png"
}
initalizeGame();

// roll button functionality


rollBtn.addEventListener('click', function(){
    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1
    diceImg1.src = `/img/dice-${dice}.png` 
    const dice2 = Math.trunc(Math.random() * 6) + 1
    diceImg2.src = `/img/dice-${dice2}.png`;
    
    currentScore1 += dice;
    currentScore2 += dice2;
    playerOneScore.innerHTML = currentScore1;
    playerTwoScore.innerHTML = currentScore2;
}
// game logic

});







// reset button functionality

resetBtn.addEventListener('click', function(){
 initalizeGame()
});

