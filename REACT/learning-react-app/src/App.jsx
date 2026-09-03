import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import "./HelloMessage"
import HelloMessage from './HelloMessage'

function App() {

return(
      <>
      <HelloMessage userName="Adi" textColor="blue" />
      <HelloMessage userName="Alice" textColor="green" />
      <HelloMessage userName="Bob" textColor="red" />
      </>
)
}

export default App
