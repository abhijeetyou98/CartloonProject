import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Gcarousel = () => {
  return (
    <div className="container text-center .col-lg-3 p-2 ">
        <div className="row">

    <div className="col">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../images/Bride_To_Be.jpeg"
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
            src="../images/Anniversary.jpeg"
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
            src="../images/Baby_Shower.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>3</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</div>
<div className="col">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../images/Bachelor_Party.jpeg"
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
            src="../images/Birthday.jpeg"
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
            src="../images/Bouquet.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>3</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</div>
<div className="col">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../images/Canopy.png"
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
            src="../images/Festival.png"
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
            src="../images/Kids.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>3</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</div><div className="col">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="../images/Romantic.jpeg"
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
            src="../images/Special.jpeg"
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
            src="../images/Other.png"
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
    </div>
  )
}

export default Gcarousel;
