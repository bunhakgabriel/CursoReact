import { useState } from 'react'

import './App.css'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragments from './components/fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'
//import City from './assets/city.jpg'


function App() {
  const [user] = useState('andre bunhak')

  const pessoas = [
    {id:1, nome: 'Renan', idade: 17, profissao: 'vendedor'},
    {id:2, nome: 'Gabriel', idade: 22, profissao: 'pintor'},
    {id:3, nome: 'Bruna', idade: 25, profissao: 'atendente'},
    {id:4, nome: 'Priscila', idade: 15, profissao: 'estudante'},
    {id:5, nome: 'Andre', idade: 23, profissao: 'pedreiro'},
    {id:6, nome: 'matheus', idade: 11, profissao: 'estudante'}
  ]

  const cars = [
    {id: 1, brand: 'Ferrari', color: 'Amarela', newCar: true, km: 0},
    {id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 34343},
    {id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 2344 }
  ]

  function showMessage() {
    console.log('Evento do componente pai!')
  }

  const [message, setMessage] = useState('')

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
          <img src="/natureza.jpg" alt="paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
          {/* <img src={City} alt="cidade" /> */}
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={user} />

      {/* destructuring */}
      <CarDetails brand="Volvo" km={100000} color="Azul" newCar={false} />

      {/* reaproveitando */}
      <CarDetails brand="Ford" color="vermelho" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />

      {/* loop em array de objetos */} 
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}

      {/* fragment */}
      <Fragments />

      {/* children */}
      <Container>
        <h1>Testando</h1>
        <h1>Testando 123</h1>
      </Container>

      {/* executar função com prop */}
      <ExecuteFunction myfunction={showMessage} />

      {/* state lift */}
      <ChangeMessageState handleMessage={handleMessage} />
      <Message msg={message} />

      {pessoas.map((pessoa) => (
        <UserDetails 
          key={pessoa.id}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}  />
      ))}

    </div>
  )
}

export default App
