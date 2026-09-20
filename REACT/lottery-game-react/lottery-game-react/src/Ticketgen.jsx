


// let generate = () => {
//   let ticketNum = Math.floor(100 + Math.random() * 900);
//   return{
//     ticketNum
//   }
  
//}
export default function Ticketgen() {
  // generate();
 let ticketNum = Math.floor(100 + Math.random() * 900);
  let digit1 = Math.floor(ticketNum / 100);       
  let digit2 = Math.floor((ticketNum / 10) % 10);
  let digit3 = ticketNum % 10;
  
   return(
    <div>{ticketNum}</div>
   )
   
}