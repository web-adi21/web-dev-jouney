function startgame() {
  let color = Math.floor(Math.random()*10 + 1);
  if (color > 4) {
    while(color > 4) {
      color = color - 4;
    };
  };
  console.log(color);
}
let body = document.querySelector("body");
body.addEventListener("keypress", startgame);