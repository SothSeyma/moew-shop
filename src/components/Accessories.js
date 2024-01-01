// Mac.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../App.css';

function Accessories() {
  const buttoncolor = '#f0932b'; // Color for add to cart button

  return (
    <Container>
      <h1>Accessories</h1>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laboriosam numquam maiores veritatis
        perspiciatis, magnam expedita sapiente dolor architecto, optio odio. Magnam illo quae ducimus,
        numquam animi harum voluptates possimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Laboriosam doloremque autem dignissimos similique, voluptates dolores aspernatur aut. Rem facilis
        provident distinctio, nulla esse, deserunt est voluptate nesciunt natus, quam harum.
      </p>
      <br />
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        {[...Array(20)].map((_, index) => (
          <Col key={index} className="my-card-col mb-1">
            <Card>
              <Card.Img
                variant="top"
                src={'http://vtech-computer.com/image/cache/catalog/Accessory/UGREEN/CR113-20283-700x400.png'}
                alt={`Mac ${index + 1}`}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>Accessoies {index + 1}</Card.Title>
                <Card.Text>
                  <p>
                    CPU: I9 13TH, GPU: 4090 <br />
                    <br />
                    RAM: 1GB
                  </p>
                </Card.Text>
                <Button className='add-to-cart-button'>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Accessories;
