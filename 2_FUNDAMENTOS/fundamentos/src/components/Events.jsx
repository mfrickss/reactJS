import { useState } from "react";

const Events = () => {
    const [vezes, setVezes] = useState(0);

    const handleClick = () => {
        console.log("Execution"); {/* ARROW FUNCTION EM REACT */}
    }

    // Função de renderização
    const renderSomenthing = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Renderizando outra coisa!</h1>
        }
    }

    return 10> 2 && <p>Carregando...</p>;
  return (
    <div>
        <div>
            <button onClick={() => setVezes(vezes + 1)}>Clique aqui {vezes}</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>  {/*evento com função */}
        </div>
        {/* Função com render */}
        {renderSomenthing(true)}
        {renderSomenthing(false)}
    </div>
  )
}

export default Events