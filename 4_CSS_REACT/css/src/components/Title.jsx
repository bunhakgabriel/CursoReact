import styles from './Title.module.css'

//Styles é como se fosse um objeto, e as classes definidas no arquivo css são as propriedades, por isso pra definir um estilo usamos 'styles.nomeClasse' ou 'style[nomeClasse]'

const Title = () => {
  return (
    <div>
        <h1 className={styles.myTitle} >Meu título</h1>
    </div>
  )
}

export default Title