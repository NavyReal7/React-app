import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img width={400} height={600}
        className="d-block w-100"
        src="./img/b2.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h2>Sports mechanized androids</h2>
        <p class="lim">limited edtion</p>

        <Link exact to={'/form'}>
         <Button variant="primary">
             Обратная связь
         </Button>
        </Link>

      </Carousel.Caption>
     
    </Carousel.Item>
    <Carousel.Item>
      <img width={400} height={600}
        className="d-block w-100"
        src="./img/b4.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
      <h3>Archer</h3>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={400} height={600}
        className="d-block w-100"
        src="./img/b5.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
      <h3>The Night knight</h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img width={400} height={600}
        className="d-block w-100"
        src="./img/b6.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
      <h3>The Wild knight</h3>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  
  )
}

export default Slider