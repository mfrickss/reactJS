import { useState } from 'react'
import './App.css'

// 2 - Imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from './components/Data';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App' style={{paddingBottom:"500px"}}>
        <h1>Avançando em React</h1>
        {/* 1 - Imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* Imagem em assets */}
        <img src={night} alt="Outra imagem" />
        {/* 3- useState */}
        <Data />
      </div>
    </>
  )
}

export default App
