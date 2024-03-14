import { useState } from "react"

/*
const ConditionalRender = () => {

    const [x] = useState(true)

  return (
    <div>
        <h1>Isso será exibido</h1>
        {x && <p>Se x for true, sim!</p> }
        {!x && <p>Agora x é falso</p>}
    </div>
  )
}
*/

const ConditionalRender = () => {

    const [name] = useState('joão')

  return (
    <div>
        <h1>IF TERNÁRIO</h1>
        { name === 'joão' ? <p>O nome é joão</p> : <p>Nome não encontrado</p> }
    </div>
  )
}

export default ConditionalRender


