import { useState } from 'react'
import './App.css'

// 2 - Imagem em assets
import night from "./assets/night.jpg";

// 3 - useState
import Data from './components/Data';

// 4 - Renderização de lista
import ListRender from './components/listRender';

// 7 - Conditional Render
import ConditionalRender from './components/ConditionalRender';

// 8 - Props
import ShowUserName from './components/ShowUserName';

// 9 - Desestruturando props
import CarDetails from './components/CarDetails';

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
        <hr></hr>
        {/* 4 - Render de Lista */}
        <h3>Array</h3>
        <ListRender />
        {/* 7 - Render condicional */}
        <hr></hr>
        <ConditionalRender />
        {/* 8 - Props */}
        <hr></hr>
        <ShowUserName name="Anna Beatriz"/>
        {/* 9 - desestruturando props*/}
        <hr></hr>
        <CarDetails brand="Civic" km={328} color="Gray" />
        {/* 10 - Reutilizando componentes */}
        <hr></hr>
        <h2>Reutilizando componentes</h2>
        <CarDetails brand="Nissan" km={953} color="Gray" />
        <CarDetails brand="Audi" km={833} color="Black" />
        <CarDetails brand="Toyota" km={253} color="Red" />

      </div>
    </>
  )
}

export default App
