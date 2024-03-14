const Events = () => {

        const handleMyEvent = (e) => {
            console.log('teste')
            console.log(e.target)
        }

        const renderSomething = (x) => {
            if(x) return <h1>Renderizando isso!</h1>
            else return <h1>Também posso renderizar isso!</h1>
        }

    return(
        <div>
            <div>
                <button onClick={handleMyEvent} >Clique aqui</button> {/* Neste caso em react nós não usamos o parenteses para chamar a função, isso porque se usarmos a função vai ser executada quando o código for lido, que no caso é quando a pagina for renderizada) */}
            </div> 
            <div>
                <button onClick={ () => console.log('clicou') } >Clique aqui também</button>
            </div>
            <div>
                {renderSomething(true)}
            </div>
        </div>
    )
}

export default Events