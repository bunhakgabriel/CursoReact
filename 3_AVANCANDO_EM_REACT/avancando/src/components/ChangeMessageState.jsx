function ChangeMessageState({handleMessage}) {
    const message1 = 'ola, tudo bem?'
    const message2 = 'ola mundo'

  return (
    <div>
        <button onClick={ () => handleMessage(message1)} >1</button>
        <button onClick={ () => handleMessage(message2)} >2</button>
    </div>
  )
}

export default ChangeMessageState