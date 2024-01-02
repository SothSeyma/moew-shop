// ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

import './ProductDetail.css'; // Adjust the path based on your directory structure

function ProductDetail() {
  const { type, id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState('');
  const thumbnailStyle = { //for smaller poster at right
    width: '100%',
    height: '110px',cursor: 'pointer',border: '1px solid black',
  };
  const handleThumbnailClick = (newImageUrl) => {
    setMainImage(newImageUrl);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Fetch product details based on the type and ID
        const productResponse = await fetch(`/Data/${type}data.json`);
        const productData = await productResponse.json();
        const selectedProduct = productData.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
        setMainImage(selectedProduct.image);

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
      
      <div className="product">
      <div className="ecommerce-gallery" data-mdb-zoom-effect="true" data-mdb-auto-height="true">
            <div className="row py-3 shadow-5">
          <div className="col-7 mb-5">
            <div className="lightbox">
              <img
                src={mainImage}
                alt="Gallery image 1"
                className="ecommerce-gallery-main-img main-image w-100"
                style={{ width: '100%', height: '350px' ,border: '1px solid black'}}
              />
            </div>
          </div>
          <div className="col-2">
            <div className="row">
              <div className="col-12 mt-1">
                <img
                  src={product.image}
                  alt="Gallery image 1"
                  className="active w-100"
                  style={thumbnailStyle}
                  onClick={() => handleThumbnailClick(product.image)}
                />
              </div>
              <div className="col-12 mt-1">
                <img
                  src={product.image1}
                  alt="Gallery image 2"
                  className="w-100"
                  style={thumbnailStyle}
                  onClick={() => handleThumbnailClick(product.image1)}    
                />
              </div>
              <div className="col-12 mt-1">
                <img
                  src={product.image2}
                  alt="Gallery image 3"
                  className="w-100"
                  style={thumbnailStyle}
                  onClick={() => handleThumbnailClick(product.image2)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
          <div className="spec">
            
              <Card style={{width:'500px'}}>
                <Card.Body>
                  <Card.Title>
                    <h1>{name}</h1></Card.Title>
                  <Card.Text>
                    <p style={{  fontSize: '20px' ,fontWeight:'bold'}}>
                      
                      <span style={{ color: 'red', fontSize: '30px' ,fontWeight:'bold'}}>{spec.price}</span> <br />
                      CPU:{spec.cpu} <br />
                      GPU:{spec.gpu} <br />
                      RAM:{spec.memory} <br />
                      Storage:{spec.storage} <br />
                      Display:{spec.display || 'N/A'} <br />
                      <span style={{color:'red'}}>
                       Free: New Gaming Backpack, Bottle <br />
                       Free: Gaming Mouse, Gaming Headset <br />
                       Free: Mousepad, Cooling Fan
                       </span>
                    </p>
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            
          </div>
      </div>
      

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
