import React from 'react'


                    //Passar PROPS entre CHAVES => {}
const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <ul style={{listStyle:"none", padding:0}}>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li> 
        </ul>
    </div>
  )
}

export default CarDetails