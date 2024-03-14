import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <Link className="link" to='/'>HOME</Link>
        <Link className="link" to='/contatos'>CONTATOS</Link>
        <Link className="link" to='/about'>ABOUT</Link>
    </div>
  )
}

export default Navbar

