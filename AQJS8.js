let nums = [];
for(let i = 0;i<100000;i++) {
  let elem = prompt(`Enter the ${i+1} element`);
  if (elem == "quit") {
    break;
  };
  nums.push(Number(elem));
}
const square = nums.map((num) => num*num);
console.log(square);

let sum = square.reduce((acc,cur) => acc + cur,0);
let avg = sum/nums.length;
console.log(avg);