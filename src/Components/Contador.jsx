import { useState } from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)
    // let contador = 0

    const sumar = () => {
        // contador = contador + 1
        setContador(contador+1)
        console.log(contador)
    }

    const restar = () => {
        setContador(contador-1)
        console.log(contador)
    }

  return (
    <div>
        <button onClick={restar}>-</button>
        <h1>{contador}</h1>
        <button onClick={sumar}>+</button>
    </div>
  )
}

export default Contador