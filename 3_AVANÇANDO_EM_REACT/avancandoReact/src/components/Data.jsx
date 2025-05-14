import { useState } from "react"

const Data = () => {

    let someData = 10;

    const [anotherNumber, setAnotherumber] = useState(15);

    const [contarClique, setClick] = useState(1);

  return (
    <>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variável</button>
        </div>
        <div>
            <p>Valor = {anotherNumber}</p>
            <button onClick={() => setAnotherumber(anotherNumber + 1)}>Mudar valor</button>
        </div>
        <div>
            <p>Clicks: {contarClique}</p>
            <button onClick={() => setClick(contarClique + 1)}>Aumentar click</button>
        </div>
    </>
  )
}

export default Data