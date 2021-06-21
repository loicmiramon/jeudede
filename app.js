const btnNewGame = document.querySelector('#new_game');
const btnRollDice = document.querySelector('#roll');
const btnHold = document.querySelector('#hold');

const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');

const currentPlayer = document.querySelectorAll('.current_player')

const scorePlayer = document.querySelectorAll('.scorePlayer')
const circleRed = document.querySelectorAll('.redCircle');

const dice = document.querySelectorAll('.dice');
const score = [0,0];
const holdScore = [0,0]

btnNewGame.addEventListener('click', () => {
      circleRed[0].classList.add('addCircle');
      circleRed[1].classList.remove('addCircle');
      score[0] = 0;
      score[1] = 0;
      score[0].innerHTML = 0;
      score[1].innerHTML = 0;
      currentPlayer[0].innerHTML = 0;
      currentPlayer[1].innerHTML = 0;     
});

btnRollDice.addEventListener('click', () => {
  let roll = Math.round(Math.random() * 6);
  if(circleRed[0].className === "redCircle w-3 h-3 rounded-full bg-red-500 m-3 addCircle") {
    if(roll === 0) {
      roll = roll + 1;
    }
    if(roll === 1) {
      console.log('au tour de joueur deux')
      currentPlayer[0].innerHTML = "0";
      score[0] = 0;
      circleRed[0].classList.remove('addCircle');
      circleRed[1].classList.add('addCircle');
    } else {
      if(score[0] !== 0) {
        score[0] = score[0] + roll;
      } else {
        score[0] = roll;
      }
      currentPlayer[0].innerHTML = score[0];
      console.log(score); 
    }
  } else if (circleRed[1].className === "redCircle w-3 h-3 rounded-full bg-red-500 m-3 addCircle") {
    if(roll === 0) {
      roll = roll + 1;
    }
    if(roll === 1) {
      console.log('au tour de joueur deux')
      currentPlayer[1].innerHTML = "0";
      score[1] = 0;
      circleRed[1].classList.remove('addCircle');
      circleRed[0].classList.add('addCircle');
    } else {
      if(score[1] !== 0) {
        score[1] = score[1] + roll
      } else {
        score[1] = roll;
      }
      currentPlayer[1].innerHTML = score[1];
      console.log(score);
    }
  }

  if(circleRed[0].className === "redCircle w-3 h-3 rounded-full bg-red-500 m-3 addCircle" || circleRed[1].className === "redCircle w-3 h-3 rounded-full bg-red-500 m-3 addCircle") {
    for(let i = 0 ; i < dice.length ; i++) {
      dice[i].classList.remove('diceAdd');
      switch (roll) {
        case 1: 
          dice[5].classList.remove('diceAdd');
          dice[0].classList.add('diceAdd');
          break;
        case 2: 
          dice[0].classList.remove('diceAdd');
          dice[1].classList.add('diceAdd');
          break;
        case 3:
          dice[1].classList.remove('diceAdd');
          dice[2].classList.add('diceAdd');
          break;
        case 4:
          dice[2].classList.remove('diceAdd');
          dice[3].classList.add('diceAdd');
          break;
        case 5:
          dice[3].classList.remove('diceAdd');
          dice[4].classList.add('diceAdd');
          break;
        case 6:
          dice[4].classList.remove('diceAdd');
          dice[5].classList.add('diceAdd');
      }
    }
  }
});

btnHold.addEventListener('click', () => {
  if(circleRed[0].className === "redCircle w-3 h-3 rounded-full bg-red-500 m-3 addCircle") {
    holdScore[0] += score[0];
    scorePlayer[0].innerHTML = holdScore[0];
    circleRed[0].classList.remove('addCircle');
    circleRed[1].classList.add('addCircle');
    score[0] = 0;
    currentPlayer[0].innerHTML = 0;
  } else if (circleRed[1].className === "redCircle w-3 h-3 rounded-full bg-red-500 m-3 addCircle") {
    holdScore[1] += score[1];
    scorePlayer[1].innerHTML = holdScore[1];
    circleRed[1].classList.remove('addCircle');
    circleRed[0].classList.add('addCircle');
    score[1] = 0;
    currentPlayer[1].innerHTML = 0;
  }
  alert('Point ajouté');
  if(scorePlayer[0].textContent >= "100") {
    alert('Le joueur 1 gagne avec un score de ' + score[0])
    score[0] = 0;
    holdScore[0] = 0;
    currentPlayer[0].innerHTML = 0;
    scorePlayer[0].innerHTML = 0;
    for(let x = 0 ; x < circleRed.length ; x ++) {
      circleRed[x].classList.remove('addCircle');
    }
  } else if (scorePlayer[1].textContent >= "100") {
    alert('Le joueur 1 gagne avec un score de ' + score[0])
    score[1] = 0;
    holdScore[1] = 0;
    currentPlayer[1].innerHTML = 0;
    scorePlayer[1].innerHTML = 0;
    for(let x = 0 ; x < circleRed.length ; x ++) {
      circleRed[x].classList.remove('addCircle');
    }
  }
});





