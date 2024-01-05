import React from 'react'
import Item from './item'


const Cartitem = (props) => {
  return (
    <div>
    {
      props.item.map(obj=>{
      return(
         <Item
         key={obj.id}
         id={obj.id}
         myId={obj.myId}
         title={obj.title}
         description={obj.description}
         price={obj.price}
         img={obj.img}
         />
      )
      })
    }
    </div>
  )
}

export default Cartitem