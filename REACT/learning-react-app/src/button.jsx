function printHello() {
  console.log("Hello!");
}


export default function button() {
  return(
    <div><button onClick={printHello}>Click Me!</button></div>
  );
}