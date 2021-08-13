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
const winnerMessage = document.querySelector('.modal-window-container');
const winner = document.querySelector('.winner');
const newGameBtn = document.getElementById('new-game-btn');



let currentScore1 = 0;
let currentScore2 = 0;
let playing = true;
function addBlur(){
    playerCardOne.classList.add('blur')
    playerCardTwo.classList.add('blur')
    rollBtn.classList.add('blur')
    resetBtn.classList.add('blur')
}

function removeWinnerMessage(){
    winnerMessage.classList.add('hidden');
}

// initalize game
const initial = function (){
    playing = true;
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    currentScore1 = 0;
    currentScore2 = 0;
        // hide winner message and modals
    // add modal for player name 1 & player name 2;
    diceImg1.src = "img/dice-1.png"
    diceImg2.src = "img/dice-2.png"
    removeWinnerMessage();  
    playerCardOne.classList.remove('blur')
    playerCardTwo.classList.remove('blur')
    rollBtn.classList.remove('blur')
    resetBtn.classList.remove('blur')  
}
initial();



// function playerOneWins(){

// }
// function playerTwoWins(){

// }
// roll button functionality

function addWinnerMessage(){
    winnerMessage.classList.remove('hidden')
}

rollBtn.addEventListener('click', function(){
    if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1
    diceImg1.src = `img/dice-${dice}.png` 
    const dice2 = Math.trunc(Math.random() * 6) + 1
    diceImg2.src = `img/dice-${dice2}.png`;
    currentScore1 += dice;
    currentScore2 += dice2;
    playerOneScore.innerHTML = currentScore1;
    playerTwoScore.innerHTML = currentScore2;
}
// end the game, no more dice rolls when a player reaches the  set score (default =  10)
    if(playerOneScore.innerHTML >= 10){
        playing = false;
        console.log('Player 1 wins!')
        addWinnerMessage()
        addBlur()
    } else if(playerTwoScore.innerHTML >= 10){
        playing = false;
        console.log('Player 2 wins!')
        addWinnerMessage()
        addBlur()
    }
    else{
        console.log('neither player reached the target score')
    }
    if(playerOneScore.innerHTML >= 10 && playerTwoScore.innerHTML < 10){
            playing =  false;
            console.log('Player 1 beat Player 2')
            addWinnerMessage()
            addBlur()
            winner.innerHTML = "PLAYER 1 IS THE WINNER";
        } else if(playerTwoScore.innerHTML >= 10 && playerOneScore.innerHTML < 10) {
            playing =  false;
            console.log('Player 2 beat Player 1')
            addWinnerMessage()
            addBlur()
            winner.innerHTML = "PLAYER 2 IS THE WINNER"
        } else if(playerOneScore.innerHTML >= 10 && playerTwoScore.innerHTML >= 10){
           if(playerOneScore.innerHTML > playerTwoScore.innerHTML){
               console.log('Player 1 has higher score')
               addWinnerMessage()
               addBlur()
               winner.innerHTML = "PLAYER 1 IS THE WINNER";
           } else if(playerTwoScore.innerHTML > playerOneScore.innerHTML){
            console.log('Player 2 has higher score')
            addWinnerMessage()
            addBlur()
            winner.innerHTML = "PLAYER 2 IS THE WINNER"
           } else if(playerOneScore.innerHTML = playerTwoScore.innerHTML){
                addWinnerMessage()
                winnerMessage.innerHTML = "THE GAME IS A TIE"
           }
            }
        });


// reset button functionality
resetBtn.addEventListener('click', function(){
 initial()
});

newGameBtn.addEventListener('click', initial)
