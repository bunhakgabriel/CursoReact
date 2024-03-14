const Challange = () => {

    const num1 = 10
    const num2 = 20

    const handleSoma = () => {
        console.log(`A soma dos valores é: ${num1+num2}`)
    }

    return (
        <div>
            <h2>Primeiro valor: {num1}</h2>
            <h2>Segundo valor: {num2}</h2>
            <button onClick={handleSoma} >Clique para somar</button>
        </div>
    )
}

export default Challange