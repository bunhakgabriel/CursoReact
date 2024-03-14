import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  // 6 - controlled inputs
  // 3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Enviando o formulario')
    console.log(name, email, bio, role)

    // 7 - limpar form
    setName('')
    setEmail('')
    setBio('')
    setRole('')
  }

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="names">Nome:</label>
                <input
                 type="text" 
                 name="names" 
                 placeholder="Digite o seu nome" 
                 onChange={handleName}
                 value={name}
                />
            </div>

            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4 - Simplificação de manipulação de  state */}
                <input 
                 type="text" 
                 name="email" 
                 placeholder="Digite o seu e-mail" 
                 onChange={(e) => { setEmail(e.target.value) }}
                 value={email} 
                />
            </label>

            {/* 8 - textarea */}
            <label htmlFor="">
              <span>Bio:</span>
              <textarea 
               placeholder='Descrição do usuario' 
               onChange={ (e) => setBio(e.target.value) } 
               value={bio}>
              </textarea>
            </label>

            {/* 9 - select */}
            <label>
              <span>Função no sistema</span>
              <select onChange={ (e) => setRole(e.target.value) } name="role" value={role} >
                <option value="user">Usuário</option>
                <option value="editor">Editor</option>
                <option value="admin">Administrador</option>
              </select>
            </label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm