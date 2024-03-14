import { useState, useEffect } from "react";

// 4 - custom hook resgatando dados
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - refatorando o post
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    //

    // 6 - loading
    const [loading, setLoading] = useState(false)
    //

    // 7 - tratando erros
    const [error, setError] = useState(null)
    //
    
    // 8 - delete 
    const [itemId, setItemId] = useState(null)

    const httpConfig = (data, method) => {

        setConfig({
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        setMethod(method)
        setItemId(data.id)
    }

    useEffect(() => {
        const fetchData = async () => {

            // 6 - loading // Quando a função começar vamos colocar o 'loading = true', quando a função terminar significa que a requisição foi concluida, então vamos colocar o 'loading = false'
            setLoading(true)
            //

            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json)    
            } catch (error) {
                console.log(`ERROR: ${error.message}`)
                setError('Houve algum erro ao carregar os dados!')
            }

            setLoading(false)
        } 
        fetchData()

    }, [url, callFetch]) //Sempre que a url mudar nós vamos fazer uma nova requisição //Sempre que o callFetch mudar nós também vamos fazer uma nova requisição, o callFetch vai mudar sempre que um item for incluido nos dados do servidor

    // 5 - refatorando post
    useEffect(() => {
        const httpRequest = async () => {
            if(method === 'POST'){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            } else if(method === 'DELETE') {
                let fetchOptions = [`http://localhost:3000/products/${itemId}`, config]
                const res = await fetch(...fetchOptions)
                const json = await res.json()
                setCallFetch(json)
            }
        }
        httpRequest()

        //O callFetch vai mudar o seu valor, isso significa que logo após fazermos a requisição de POST, uma requisição GET vai ser realizada(linha 21) para renderizar os novos dados
    }, [config, method, url, itemId])

    return { data, httpConfig, loading, error } //data são os dados que vamos usar na nossa aplicação, então vamos retorna-los
}




