import React, { useEffect, useState } from 'react'

const CountriesList = () => {
    const [lista, setLista] = useState([])    
    const url = 'https://restcountries.com/v3.1/all'

    const [estado, setEstado] = useState('andorra')

    const urlSearch = 'https://restcountries.com/v3.1/name/' + estado
    useEffect(() => {
        setTimeout(() => {
            //Ejemplo con .then
            fetch(url)
            .then((res) => res.json())
            .then((data) => setLista(data)) 
            .catch((err) => console.error(err))

            //Ejemplo con async/await
            // const fetchData = async () => {
            //     const res = await fetch(urlSearch)
            //     const data = await res.json()
            //     console.log(data)
            // }
            // fetchData()

        }, 2000)
    }, [])

    console.log(lista)
  return (
    <div>
        {lista.length <= 0 ? 'Cargando...' : lista.map((pais) => {
            return ( <div key={pais.name.common}>
                <li>{pais.name.common} - {pais.capital}</li>
            </div>)
        })}
        {'condicion' ? true : false}
    </div>
  )
}

export default CountriesList