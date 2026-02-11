let a = prompt("Enter the number");
function Sumtill(n) {
  let sum = 0;
  for(let i = 0; i<=n ; i++) {
    
    sum = i + sum;
  }
  return sum;
}

console.log(Sumtill(a));
