const TemplateExpressions = () => {
    const name = "Ricks";
    const data = {
        age: 21,
        job: "MRFRICKS"
    }
  return (
    <div>
        <p>A soma de 2 + 2 é: {2 +2}</p>
        <h3>Boas vindas, {name}!</h3>
        <p>Sua idade é {data.age} anos e simplesmente {data.job} FODASE!</p>
    </div>
  )
}

export default TemplateExpressions