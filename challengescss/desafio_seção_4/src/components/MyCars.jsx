import styles from './MyCars.module.css'

const MyCars = ({marca, cor, estoque}) => {
  return (
    <ul className={styles.carros} >
        <li>Marca: {marca}</li>
        <li>Cor: {cor}</li>
        <li className={estoque > 0 ? (styles.comEstoque) : (styles.semEstoque)} >Estoque: {estoque}</li>
    </ul>
  )
}

export default MyCars

