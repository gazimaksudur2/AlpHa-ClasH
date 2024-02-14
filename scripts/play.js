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

// console.log(val,num);
alpha.innerText = val;


function myEventHandler(event) {
  var keyCode = event.key;
//   console.log('your input is ',keyCode,'and value is : ',val);

  if (keyCode !== "Shift") {
    if(typeof valTemp !== 'undefined'){
        // console.log('temp2 : ',temp2,'& type is : ',typeof temp2);
        const keycol = document.getElementById(valTemp);
        keycol.classList.remove(col);
    }
    
    if (keyCode === val) {
      score++;
      valTemp = val.toLowerCase();
      col = 'bg-green-500';
      document.getElementById(valTemp).classList.add(col);
    //   temp2 = val;
      console.log("you are correct.", keyCode);
      const num1 = randomAlpha() + 65;
      let temp = (parseInt(Math.floor(Math.random()*100))&1?num1:(num1+32));
      val = String.fromCharCode(temp);

      // console.log(val,num);
      alpha.innerText = val;
    } else if (--life) {
      lifeNow.innerText = life;
      valTemp = keyCode.toLowerCase();
      col = 'bg-red-500';
      document.getElementById(valTemp).classList.add(col);
    //   temp2 = val;
    } else {
    //   console.log("you are not correct.", keyCode);
      totalScore.innerText = score;
      valTemp = keyCode.toLowerCase();
      col = 'bg-red-500';
      document.getElementById(valTemp).classList.add(col);
    //   temp2 = val;
      score = 0;
      hideElementByID("play-ground");
      visibleElementByID("score-board");
    }
  }
  scoreNow.innerText = score;
  // if((keyCode>='A'&&keyCode<='Z')||(keyCode>='a'&&keyCode<='z')){
  //     if(keyCode===val){
  //         console.log('you are correct.',keyCode);
  //     }else{
  //         console.log('you are not correct.',keyCode);
  //         // hideElementByID('play-ground');
  //         // visibleElementByID('score-board');
  //     }
  // }

  // console.log('Key code: ' + keyCode);
}

function playStart() {
  hideElementByID("home");
  visibleElementByID("play-ground");

  document.addEventListener("keydown", myEventHandler);
}

playAgain.onclick = playagain;

function playagain() {
  life = 3;
  lifeNow.innerText = life;
  hideElementByID("score-board");
  visibleElementByID("play-ground");

  document.removeEventListener("keyup", myEventHandler);

  document.addEventListener("keydown", myEventHandler);
}
