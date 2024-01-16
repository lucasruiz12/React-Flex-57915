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
   
  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList instrumentos={instrumentos}/>
    </div>
  )
}

export default ItemListContainer