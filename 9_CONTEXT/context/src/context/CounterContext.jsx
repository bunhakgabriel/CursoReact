// 1 - criar context
import { createContext, useState } from "react";

export const CounterContext = createContext()

// 2 - criar provider
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}} > 
            {children}
        </CounterContext.Provider>
    )

}

// 'value' serão os valores que seram enviados, podemos enviar tanto o valor (estado) como a alteraçaõ do valor (alteração do estado)
// se enviarmos apenas o valor, nós vamos ter acesso a ele, mas não vamos poder altera-lo