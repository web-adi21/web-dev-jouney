let num;
let color;
let red = document.querySelector(".red-btn");
let blue = document.querySelector(".blue-btn");
let green = document.querySelector(".green-btn");
let orange = document.querySelector(".orange-btn");
function flash(a) {
a.style.height = "0px";
setTimeout(() => {a.style.height = "130px"} , 500);
};
function startgame() {
  let num = Math.floor(Math.random()*10 + 1);
  if (num > 4) {
    while(num > 4) {
      num = num - 4;
    };
  };
  console.log(num);
  if (num == 1) {
    color = red;
    flash(color);
  } else if (num == 2) {
    color = blue;
    flash(color);
  } else if (num == 3) {
    color = green;
    flash(color);
  } else if (num == 4) {
    color = orange;
    flash(color);
  }

  console.log(color);
}
let body = document.querySelector("body");
body.addEventListener("keypress", startgame);