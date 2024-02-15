const playAgain = document.getElementById("pl-btn");
const alpha = document.getElementById("alpha");
const scoreBoard = document.getElementById("score-board");
const scoreNow = document.getElementById("score-now");
const totalScore = document.getElementById("total-score");
const lifeNow = document.getElementById("life-now");

function randomAlpha() {
  let al = Math.random() * 25;
  al = Math.round(al);
  return al;
}

let score = 0,
  life = 3;
scoreNow.innerText = score;
lifeNow.innerText = life;

console.log("something");
const num = randomAlpha() + 65;
let temp = (parseInt(Math.floor(Math.random()*100))&1?num:(num+32));
let val = String.fromCharCode(temp);
let col,valTemp;
let escaped = false;

alpha.innerText = val;
document.getElementById(val.toLowerCase()).classList.add('bg-yellow-500');

function playagain() {
  life = 3;
  lifeNow.innerText = life;
  hideElementByID("score-board");
  hideElementByID("home");
  visibleElementByID("play-ground");

  document.removeEventListener("keyup", myEventHandler);

  document.addEventListener("keydown", myEventHandler);
}

function playStart() {
  hideElementByID("home");
  visibleElementByID("play-ground");

  document.addEventListener("keydown", myEventHandler);
}


function myEventHandler(event) {
  var keyCode = event.key;
  console.log('encountered --> ',keyCode , '& val is : ',val);

  if (keyCode !== "Shift") {
    if(typeof valTemp !== 'undefined'&& (!escaped)){
        const keycol = document.getElementById(valTemp);
        keycol.classList.remove(col);
        document.getElementById(valTemp).classList.remove('bg-yellow-500');
    }

    if(keyCode === 'Escape'){
      totalScore.innerText = score;
      valTemp = keyCode.toLowerCase();
      score = 0;
      hideElementByID("play-ground");
      visibleElementByID("score-board");
      escaped = true;
    }else escaped = false;
     
    if (keyCode === val) {
      score++;
      valTemp = val.toLowerCase();
      col = 'bg-green-500';
      document.getElementById(valTemp).classList.add(col);
      console.log("you are correct.", keyCode);
      const num1 = randomAlpha() + 65;
      let temp = (parseInt(Math.floor(Math.random()*100))&1?num1:(num1+32));
      val = String.fromCharCode(temp);

      alpha.innerText = val;
      document.getElementById(val.toLowerCase()).classList.add('bg-yellow-500');
    } else if (--life > 0) {
      lifeNow.innerText = life;
      valTemp = keyCode.toLowerCase();
      col = 'bg-red-500';
      document.getElementById(valTemp).classList.add(col);
    } else {
      totalScore.innerText = score;
      valTemp = keyCode.toLowerCase();
      score = 0;
      scoreNow.innerText = score;
      hideElementByID("play-ground");
      visibleElementByID("score-board");
    }
  }
  scoreNow.innerText = score;
  if(keyCode === 'Enter' && document.getElementById('play-ground').classList.contains('hidden')){
    escaped = true;
    playagain();
  }
}

playAgain.onclick = playagain;