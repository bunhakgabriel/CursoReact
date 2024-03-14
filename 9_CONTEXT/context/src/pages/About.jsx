import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const About = () => {
  const { counter } = useContext(CounterContext)

  return (
    <>
        <h1>About</h1>
        <p>Valor do contador: {counter}</p>
    </>
  )
}

export default About