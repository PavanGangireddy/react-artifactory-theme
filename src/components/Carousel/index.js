import React, { Component } from 'react';
import Slider from 'react-slick';
import './carousel.scss';
const carousel_img_1 = require('./img1.jpg'),
      carousel_img_2 = require('./img2.jpg'),
      carousel_img_3 = require('./img3.jpg')
const settings = {
      slidesToShow: 2,
    }
const Carousel=()=>(
    	<div className='carousel-container'>
      	<Slider {...settings}>
        	<div><img src={carousel_img_1}/></div>
          <div><img src={carousel_img_2}/></div>
          <div><img src={carousel_img_3}/></div>
          <div><img src={carousel_img_1}/></div>
        </Slider>
      </div>
)
export default Carousel;