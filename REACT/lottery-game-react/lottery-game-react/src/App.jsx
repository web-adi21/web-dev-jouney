// App.jsx
import { useState } from 'react';
import Ticket from './Ticket';

export default function App() {
  // 1. STATE: Store the 3 digits in an array. 
  const [ticket, setTicket] = useState([0, 0, 0]);

  // 2. LOGIC: Generate 3 separate random numbers between 0 and 9
  const getNewTicket = () => {
    const digit1 = Math.floor(Math.random() * 10);
    const digit2 = Math.floor(Math.random() * 10);
    const digit3 = Math.floor(Math.random() * 10);
    
    // Update the state with the new array
    setTicket([digit1, digit2, digit3]);
  };

  // 3. WIN CONDITION: Add the 3 digits together and check if it equals 15
  const sum = ticket[0] + ticket[1] + ticket[2];
  const isWinner = sum === 15;

  // 4. RENDER: Put it on the screen
  return (
    <div>
      {/* If isWinner is true, show the text. Otherwise, show nothing */}
      <h2>Lottery {isWinner ? "'Congratulations, you won!'" : ""}</h2>
      
      {/* Pass the state data down to the Ticket component */}
      <Ticket digits={ticket} />
      
      {/* Trigger the function when the button is clicked */}
      <button onClick={getNewTicket}>Get new Ticket</button>
    </div>
  ); 
}