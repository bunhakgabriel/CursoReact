//style / css
import './App.css'

//components
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'
import Events from './components/Events'
import Challange from './components/Challenge'

function App() {
  return (
    <>
      <h1 className="teste" >Fundamentos</h1>
      <TemplateExpression />
      <FirstComponent />
      <MyComponent />
      <Events />
      <Challange />
    </>
  )
}

export default App
