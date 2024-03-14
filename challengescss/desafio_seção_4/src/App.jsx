import './App.css'
import MyCars from './components/MyCars'

function App() {

  const carros = [
    {id: 1, marca: 'fiat', cor: 'vermelho', estoque: 0},
    {id: 2, marca: 'chevrolet', cor: 'prata', estoque: 3},
    {id: 3, marca: 'toyota', cor: 'branco', estoque: 5},
    {id: 4, marca: 'volvo', cor: 'azul', estoque: 0},
  ]

  return (
    <div>
      
      <h1>Compre seu carro 0km</h1>
      
      <div>
        {carros.map(( carro ) => (
          <MyCars key={carro.id} marca={carro.marca} cor={carro.cor} estoque={carro.estoque} />
        ))}
      </div>

    </div>
  )
}

export default App
