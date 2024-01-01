import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function Footer() {
  const modelImages = [
 
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Dell.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Lenovo.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Apple.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/HP.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Logitech.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/TOSHIBA.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Prolink.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Transcend.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Asus.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/RAZer.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/uploads/all/IEkXKLRuANAMjewWGtIa92D9sh094jAkUIr3d5x0.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Acer.png',
    'https://s3.ap-southeast-1.amazonaws.com/uploads-store/Brand/Anitech.png',
    // Add more model image URLs as needed
  ];
  const setting = {
    infinite: true,
    dots: false,
    infinite: true,
    speed: 10000,           // Adjust the speed (lower values mean faster)
    slidesToShow: 5,      // Number of slides to show at once
    slidesToScroll: 0,    // Number of slides to scroll at a time
    autoplay: true,
    autoplaySpeed: 1,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',   // No padding for a closer look
  };
  return (
    <footer className="bg-light text-center py-4">
      <div className="model-images">
      <Slider {...setting}>
        {modelImages.map((modelImage, index) => (
          <div key={index}>
            <img src={modelImage} alt={`Model ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
      <Container>
        <Row>
          <Col>
            <div className="mb-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaFacebook size={30} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.telegram.org" target="_blank" rel="noopener noreferrer">
                <FaTelegram size={30} />
              </a>
            </div>
            <div>
              <p>ITE M1 G8, RUPP, Cambodia</p>
              <p>Email: contact@pcshop.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
