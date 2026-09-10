import { useState } from 'react'
import Counter from './counter.jsx';
import './App.css'
import LikeButton from './LikeButton.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>States in React</p>
     <LikeButton/>
      
    </>
  )
}

export default App
