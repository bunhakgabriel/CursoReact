import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    const [searchParams] = useSearchParams() //aqui nós estamos extraindo o parâmetro da url
    const param1 = searchParams.get('q')

    const url = "http://localhost:3000/products"
    const {data: items, loading, error} = useFetch(url)

  return (
    <div>
        <h1>Resultados disponíveis</h1>
        <ul className='products'>
            {items && items.map( item => {
              if(item.name.includes(param1)) 
                return <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <Link to={`/product/${item.id}`} >Detalhes</Link>
                </li> 
            })}
        </ul>
    </div>
  )
}

export default Search