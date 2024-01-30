import React, { useEffect, useState } from 'react'
import productos from '../instrumentos.json'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
    const [instrumentos, setInstrumentos] = useState([])

    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.instrumentos)
        }, 2000)
    })

    useEffect(() => {
        fetchData()
        .then(res => setInstrumentos(res))
    }, [])

    // Deberian hacer para la 2da pre-entrega
        // Lógica para obtener mediante useParams() si existe tal category que muestre la lista filtrada (metodo .filter())
    //
   
  return (
    <div>
        <h1>Bienvenidos a Música del Alma</h1>
        {instrumentos.length == 0 ? <h1>Cargando...</h1> : <ItemList instrumentos={instrumentos}/>}
    </div>
  )
}

export default ItemListContainer