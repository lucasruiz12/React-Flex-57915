import React from 'react'

const ItemList = ({instrumentos}) => {


    // const lista = instrumentos.map((item) => {
    //     console.log(item)
    //     return ( <div>
    //             <h2>{item.name}</h2>
    //             <h3>${item.price}</h3>
    //         </div>
    //     )
    // })  
  return (
    <div>
        {/* {lista}  */}
        {instrumentos.map((item) => <div>
                <h2>{item.name}</h2>
                <h3>${item.price}</h3>
            </div>
        )}
    </div>
  )
}

export default ItemList