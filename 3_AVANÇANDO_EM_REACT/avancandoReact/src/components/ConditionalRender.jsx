import React from 'react'

const ConditionalRender = () => {
    const x = true;

    const name =  "Ricks"
  return (
    <div>
        {/* 7 - Render condicional */}
        <h3>Isso será exibido?</h3>
        {x && <p>Se x for true, sim!</p>}
        {/* 8 - else */}
         <h3>Render ternário</h3>
        {name === "Ricks" ? (
            <div> 
                <p>Olá {name}</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender