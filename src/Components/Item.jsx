import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  const img = 'https://media.istockphoto.com/id/924715090/es/vector/conjunto-de-instrumentos-musicales-jazz-blues-y-m%C3%BAsica-cl%C3%A1sica.jpg?s=1024x1024&w=is&k=20&c=wxEIxzSzTAu3sUrpanfBky41RBLQbfzI2lPxoCLALOI='
  return (
    <div className='card'>
        <img src={img} alt="" />
        <Link to={'/product/' + item.id}><h2>{item.name}</h2></Link>
        <h3>${item.price}</h3>
    </div>
  )
}

export default Item