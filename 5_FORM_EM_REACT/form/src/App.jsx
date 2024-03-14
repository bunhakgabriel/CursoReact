import './App.css'
import MyForm from './components/MyForm'

function App() {
  return (
    <div>
      <h2>Forms</h2>
      <MyForm user={{ 
        name: 'Josias', 
        email: 'Josias@gmail.com',
        bio: 'Sou um advogado',
        role: 'editor' }} 
      />
    </div>
  )
}

export default App
