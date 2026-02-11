let gameSeq = [];
let userSeq = [];

let btns = ["orange" , "red" , "blue" , "green"]

let started = false;
let level = 0;

let h2 = document.querySelector(".h2");

document.addEventListener("keypress" , function() {
  if (started == false) {
    console.log("game has started");
    started = true;
    levelup();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  },300);
}
function levelup() {
level++;
h2.innerText = `Level ${level}`;

let randIdx = Math.floor(Math.random() * 3);
let randcolor = btns[randIdx];
let randBtn = document.querySelector(`.${randcolor}`);
console.log(randIdx);
console.log(randcolor);
console.log(randBtn);
btnFlash(randBtn);
}

