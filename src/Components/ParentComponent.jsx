import React, { useState } from 'react'

const ParentComponent = ({children}) => {
    // console.log(props)
    const [texto, setTexto] = useState('Esto es un ejemplo de prop')
    
  return (
    <div>
        
        ParentComponent
        {children(texto, setTexto)}
    </div>
  )
}

export default ParentComponent