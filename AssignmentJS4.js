let arr = [];
while(true) {
  let num = prompt("Enter numbers in the array");
   if(num == "quit"){
    break
   }1
    arr.push(num);
  
}
console.log(`Your input array is ${arr}`);
let delnum = prompt("Enter the number you want to discard");

for (let i=0;i < arr.length;i++) {
  if (arr[i] == delnum) {
    arr.splice(i , 1 );
  }

}

console.log(arr);