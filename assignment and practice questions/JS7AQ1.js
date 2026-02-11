let arr = [];
let n = prompt("Enter the number of elements in the array");
for(let i = 0;i<n;i++) {
  let elem = prompt(`Enter the ${i+1} number`);
  arr.push(Number(elem));
}
console.log(arr);
const arrayAverage = (a) => {
  let sum = 0;
  for(let i = 0;i<n;i++) {
    sum = sum+a[i];
  }
  let average = sum/n;
  return average;
}
