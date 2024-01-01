import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../asset/IMG_3137.PNG';
import image2 from '../asset/IMG_3138.PNG';
import image3 from '../asset/IMG_3139.PNG';
import image4 from '../asset/IMG_3140.PNG';
import image5 from '../asset/IMG_3141.PNG';
import image6 from '../asset/IMG_3142.PNG';
import image7 from '../asset/IMG_3143.PNG';
import '../App.css';

// External image URLs for models
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

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // 4 seconds
    pauseOnHover: true,
  };
  

  return (
    <div>
      <h1>Welcome to Moew Store!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio minima nesciunt fugiat! Aspernatur dolore ducimus ullam illum natus, labore recusandae optio veritatis iure ea non soluta ratione cupiditate aperiam aliquid!</p>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
      
      <div>
        <p> <br />
            <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, hic? Temporibus animi aut soluta laborum, nulla magnam voluptatibus ducimus? Fugit, doloremque. Ea at voluptate temporibus maxime? Quaerat nihil assumenda blanditiis.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut, laboriosam repellat delectus facere quam dolores. Deserunt necessitatibus ratione, soluta alias laboriosam veniam laborum, animi obcaecati enim molestias impedit quas!
        </p>
        
      </div>
      
    </div>
  );
};

export default HomePage;
