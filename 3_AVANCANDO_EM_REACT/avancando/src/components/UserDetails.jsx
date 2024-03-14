function UserDetails({nome, idade, profissao}) {
  return (
    <div className="userDetails" >
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
            <li>
                Tirar Habilitação:
                {idade >= 18 ? ' Apto' : ' Inapto'}
            </li>
        </ul>
    </div>
  )
}

export default UserDetails