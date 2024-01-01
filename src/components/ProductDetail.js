// ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

import './ProductDetail.css'; // Adjust the path based on your directory structure

function ProductDetail() {
  const { type, id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Fetch product details based on the type and ID
        const productResponse = await fetch(`/Data/${type}data.json`);
        const productData = await productResponse.json();
        const selectedProduct = productData.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);

        // Fetch related products based on the type
        const relatedProductsResponse = await fetch(`/Data/${type}dataRelatedProducts.json`);
        const relatedProductsData = await relatedProductsResponse.json();
        setRelatedProducts(relatedProductsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProductDetails();
  }, [type, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, spec, image } = product;

  return (
    <Container className="product-detail-container">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + image}
              alt={name}
              className="card-img-top square-box"
            />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                <p>
                  <strong></strong>
                  <span style={{ color: 'red', fontSize: '30px' }}>{spec.price}</span> <br />
                  <strong>CPU:</strong> {spec.cpu} <br />
                  <strong>GPU:</strong> {spec.gpu} <br />
                  <strong>RAM:</strong> {spec.memory} <br />
                  <strong>Storage:</strong> {spec.storage} <br />
                  <strong>Display:</strong> {spec.display || 'N/A'} <br />
                  <strong style={{ color: 'red' }}>Free: New Gaming Backpack, Bottle</strong> <br />
                  <strong style={{ color: 'red' }}>Free: Gaming Mouse, Gaming Headset</strong> <br />
                  <strong style={{ color: 'red' }}>Free: Mousepad, Cooling Fan</strong>
                </p>
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Display related products and their details */}
      <Row className="mt-4">
        <Col md={6}>
          <h4>Related Products</h4>
          <Row className="gx-3">
            {relatedProducts.map((relatedProduct) => (
              <Col md={4} key={relatedProduct.id}>
                <Card className="mb-3 d-flex flex-column h-100" >
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + relatedProduct.image}
                    alt={relatedProduct.name}
                    className="card-img-top square-box"
                    style={{ height: '100px', width: '100px' }}
                  />
                  <Card.Body className="d-flex flex-column align-items-center justify-content-between">
                    <Card.Title>{relatedProduct.name}</Card.Title>
                    <Card.Text>
                    <strong></strong>
                      <span style={{ color: 'red', fontSize: '22px' }}>{relatedProduct.spec.price}</span> <br />
                      <strong>CPU:</strong> {relatedProduct.spec.cpu} <br />
                      <strong>GPU:</strong> {relatedProduct.spec.gpu} <br />
                      <strong>RAM:</strong> {relatedProduct.spec.memory} <br />
                      <strong>Storage:</strong> {relatedProduct.spec.storage}
                    </Card.Text>
                    {/* Use Link to navigate to the related product detail page */}
                    <Link to={`/product/${type}/${relatedProduct.id}`}>
                      <Button variant="outline-primary">View Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
