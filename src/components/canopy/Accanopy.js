import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Accanopy = () => {
  return (
    <div>
    <div className="p-2">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../images/canopy1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>1</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../images/canopy2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>2</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../images/canopy3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>3</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  )
}

export default Accanopy;
