// Ticket.jsx
export default function Ticket({ digits }) {
  return (
    <div>
      {/* Render the 3 array items side-by-side so they look like one number */}
      <h4>Lottery Ticket: {digits[0]}{digits[1]}{digits[2]}</h4>
    </div>
  );
}