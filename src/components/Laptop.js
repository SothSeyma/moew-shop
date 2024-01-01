import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ProductDetail from './ProductDetail';
import '../App.css';

function Laptop() {
  // Fetch the data from desktopdata.json
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('/Data/laptopdata.json')  // file
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // color for add to cart button
  const buttoncolor = '#f0932b';

  return (
    <Container>
      <h1>Laptop</h1>
      <br />
      <p>
        
      </p>
      <br />
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        {products.map((product) => (
          <Col key={product.id} className="my-card-col mb-1">

                <Link to={`/product/laptop/${product.id}`} style={{ textDecoration: 'none' }}> 
                 <Card>
                  
                               <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + product.image}
                    alt={product.name}
                    className="card-img-top"
                    style={{ width: '200px', height: '200px' }} //size for product image
                  />
                               <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <p>
                      CPU: {product.spec.cpu} <br />
                      GPU: {product.spec.gpu} <br />
                      RAM: {product.spec.memory} <br />
                      Storage: {product.spec.storage} <br />
                      Display:{product.spec.display}
                    </p>
                  </Card.Text>
                  <Button style={{ backgroundColor: buttoncolor }}>Add To Cart</Button>
                               </Card.Body>
                             </Card>
               </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Laptop;
