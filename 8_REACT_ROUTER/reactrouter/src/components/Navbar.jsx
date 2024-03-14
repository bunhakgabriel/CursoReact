// 2 - links com react router
import './Navbar.css'

import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/" >Home</Link>
            <Link to="/about" >Sobre</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar

// '<Link to="/" >Home</Link>' equivale ao código '<a href="/">Home</a>', a diferença é que a tag <a> faz o reload da pagina, e a tag <Link> faz o redirecionamento trocando o componente(comportamento de uma SPA), fornecendo uma melhor experiência para o usuario

