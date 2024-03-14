import { useState } from 'react'
import './App.css'

// 4 - custom hook
import { useFetch } from './hooks/useFetch'

function App() {

  // 4 - custom
  const { data: items, httpConfig, loading, error } = useFetch('http://localhost:3000/products') // '{ data: items }', estamos renomeando os dados para items 

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // 1 - resgatando dados //O código abaixo foi substituido pelo hook useFetch da pasta hooks
  //useEffect( () => {

  //  async function fetchData(){
  //    const res = await fetch('http://localhost:3000/products')
  //    const data = await res.json()
  //    setProducts(data)
  //  }

  //  fetchData()
  //}, [])

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = { //Esse é o objeto que contém os dados que vamos enviar para o backend 
      name,
      price,
      //id: Math.random() //A propriedade id é criada automaticamente pelo json server, mas nós também podemos cria-la manualmente
    }

    //O código abaixo foi substituido pelo hook useFetch da pasta hooks
    
    // await fetch('http://localhost:3000/products', { //esse segundo parâmetro é um objeto, que configura como vai ser a requisição, se não definirmos esse objeto o valor default é GET
    //  method: 'POST',
    //  headers: { //Cabeçalhos da requisição, nesse cabeçalho nós vamos definir o tipo de conteúdo estamos manipulando, que no caso é um JSON
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify(product) //body é o corpo da requisição, o nome dessa propriedade tem que ser 'body' obrigatoriamente, como os dados do servidor são JSON, nós precisamos converte-los para JSON antes de enviar(tranformar nosso objeto javascript em objeto JSON)
    //})

    // 3 - carregamento dinâmico // previus state
    //setProducts(prevProduct => [...prevProduct, product])

    // 5 - refatorando post
    httpConfig(product, 'POST')

    setName('')
    setPrice('')
  }

  // 6 - delete

  const handleDelete = (product) => {
    httpConfig(product, 'DELETE')
  }

  return (
      <div className='App'>
        <h1>Lista de Produtos</h1>
        {/* 6 - loading, quando o loading for negativo vamos exibir a lista, se existir algum erro vamos exibi-lo, esse 'error' vem do try catch */} 
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && <ul> 
          {items && items.map( product => { //somente quando 'items' for um valor 'true' nós vamos fazer o map, pois na primeira passagem(linha 12) no nosso hook 'useFetch' o items que é o 'data' é definido inicialmente como null
            return <li key={product.id}>{product.name} - R${product.price} - <button onClick={() => handleDelete(product)} className='del' >Delete</button></li>
          })}
        </ul>}
        <div className="add-product">
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input 
                  type="text" 
                  value={name} 
                  name='name' 
                  onChange={ (e) => setName(e.target.value)} 
                />
                Preço:
                <input 
                  type="number" 
                  value={price} 
                  name='price' 
                  onChange={ (e) => setPrice(e.target.value)} 
                />
              </label>
              {/* 7 - state de loading no post */}
              {loading && <input type="submit" value='Aguarde' disabled />}
              {!loading && <input type="submit" value='Criar' />}
            </form>
        </div>
      </div>
  )
}

export default App
