import React from 'react'

const Item = ({item}) => {
  return (
    <div>
        <h2>{item.name}</h2>
        <h3>${item.price}</h3>
    </div>
  )
}

export default Item