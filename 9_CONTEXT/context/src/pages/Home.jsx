// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  // const { counter } = useContext(CounterContext)
  const { counter } = useCounterContext() // usando context como um hook 

  // 5 - context mais complexo
  const {color} = useTitleColorContext()

  return (
    <>
        <h1 style={{color: color}} >Seja Bem-Vindo a Página Inicial</h1>
        <p>Valor do contador: {counter}</p>
        {/* 3 - alterando valor contexto */}
        <ChangeCounter />
    </>
  )
}

export default Home