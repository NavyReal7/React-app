import React from 'react';
import Slider from './Slider';
import Carditem from './cart/Cartitem';

const Home = (props) => {
  return (
    <div>
       <Slider></Slider>
       <Carditem item={props.item}/>
    </div>
  )
}

export default Home