import { useState } from "react"

const ListRender = () => {
    const [users, setUsers] = useState([
      { id: 1, name: "Matheus", age: 31 },
      { id: 2, name: "João", age: 28},
      { id: 3, name: "Pedro", age: 44 }
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4)  //Vai retornar um numero inteiro até 3, que é o numero de items da nossa lista
      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
      //O randomNumber vai gerar um numero de 1 a 3, nós vamos filtrar os users, e aquele user que tiver um id igual a randomNumber não vai ser retornado, ou seja, sera excluido do novo array filtrado
    }
    
  return (
    <div>
        <ul>
            {users.map( (item,indice) => (
                <li key={indice} >{item.name}</li>
            ) )}
        </ul>
        <button onClick={deleteRandom} >Delete random user</button>
    </div>
  )
}

export default ListRender