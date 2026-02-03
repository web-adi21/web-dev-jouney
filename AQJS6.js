let arr = [];
let noelem = prompt("Enter the total number of elements");
for(let i = 0;i<noelem;i++) {
  let elem = prompt(`Enter the ${i+1} element`);
  arr.push(elem);
}
console.log(arr);
let limelem = prompt("Enter the limiting element");

function largerelem(n) {
 for(let i = 0; i<noelem ; i++) {
  if (arr[i]>limelem) {
    console.log(arr[i]);
  };
};
};
largerelem(limelem);