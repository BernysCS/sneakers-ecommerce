import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import React, { useState } from "react";

function App() {
  const [addMinus, setAddMinus] = useState(0);
  const [carItems, setCarItems] = useState(0);

  return (
    <>
      <Header carItems={carItems} setCarItems={setCarItems} />
      <Main addMinus={addMinus} setAddMinus={setAddMinus} setCarItems={setCarItems} />
    </>
  )
}

export default App
