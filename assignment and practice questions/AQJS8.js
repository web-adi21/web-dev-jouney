// let arr = [];
// for(let i = 0;i<100000;i++) {
//   let elem = prompt(`Enter the ${i+1} element`);
//   if (elem == "quit") {
//     break;
//   };
//   arr.push(Number(elem));
// }
// const square = arr.map((num) => num*num);
// console.log(square);

// let sum = square.reduce((acc,cur) => acc + cur,0);
// let avg = sum/arr.length;
// console.log(avg);

let arr = [];
for(let i = 0;i<100000;i++) {
  let elem = prompt(`Enter the ${i+1} element`);
  if (elem == "quit") {
    break;
  };
  arr.push(Number(elem));
}
console.log(arr);

const plus = arr.map((a) => a+5);
console.log(plus);