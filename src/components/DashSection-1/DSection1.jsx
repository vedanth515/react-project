

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DSection1.css"; // Custom styling

const images = [
  "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/x/d/-original-imah4ecdcehfm8qd.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/612/612/kcc9q4w0/shirt/d/q/h/xl-hlsh011439-highlander-original-imafthkjm2bm9zev.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/5/n/s/xxl-po-prnt01-fs-printout-original-imahyyduh2m4dgmh.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/m/d/v/-original-imah4w5zzzgwhp3t.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/e/e/h/s-den-sng-01-regrowth-original-imaganhquyfzd3kz-bb.jpeg?q=70",
];

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: <button className="arrow left">&#9665;</button>,
    nextArrow: <button className="arrow right">&#9655;</button>,
  };

  return (
    <div className="carousel-container">
      <h2>Our tip for new customers:</h2>
      <p>In the Showroom, we present various looks that you might like.</p>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide">
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
      <button className="showroom-button">GO TO THE SHOWROOM</button>
    </div>
  );
}

export default Carousel;
