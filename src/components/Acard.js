import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Acard = () => {
  return (
      <div >
      <div >
        <Row xs={1} md={1} className="g-4">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="../images/Birthday.jpeg" />
                <Card.Body>
                  <Card.Title>Birthday Decoration</Card.Title>
                  <Card.Text>
              
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Acard;
