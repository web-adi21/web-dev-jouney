import { useState } from 'react'
import SearchBox from "./SearchBox";
import './App.css'
import InfoBox from './InfoBox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBox />
      <InfoBox />
    </>
  )
}

export default App
