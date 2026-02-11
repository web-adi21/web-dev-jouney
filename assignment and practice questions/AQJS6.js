// let arr = [];
// let noelem = prompt("Enter the total number of elements");
// for(let i = 0;i<noelem;i++) {
//   let elem = prompt(`Enter the ${i+1} element`);
//   arr.push(elem);
// }
// console.log(arr);
// let limelem = prompt("Enter the limiting element");

// function largerelem(n) {
//  for(let i = 0; i<noelem ; i++) {
//   if (arr[i]>limelem) {
//     console.log(arr[i]);
//   };
// };
// };
// largerelem(limelem);

let arr=[];
let n = prompt("Enter number of countries");
for(let i = 0;i<n;i++) {
  let country = prompt("Enter the countries");
  arr.push(country);
}
console.log(arr);
function longcountry(m) {
  let long = 0;
  let longIndex = 0;
  for(let i = 0;i < m;i++) {
  if(arr[i].length > long) {
    long = arr[i].length;
    longIndex = i;
  }
}
return arr[longIndex];
}
longcountry(n);