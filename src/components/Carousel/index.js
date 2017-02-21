import React, { Component } from 'react';
import {Link} from 'react-router';
import Slider from 'react-slick';

/* Importing styles */
import './styles/index.scss';

/*Requiring images for carousel*/
const carousel_img_1 = require('./assets/img1.jpg'),
      carousel_img_2 = require('./assets/img2.jpg'),
      carousel_img_3 = require('./assets/img3.jpg')
const settings = {
        autoplay:true,
        slidesToShow:2,
        pauseOnHover:true
    }
/*Carousel component*/
const Carousel=()=>(
    	<div className='carousel-container'>
      	<Slider {...settings}>
        	<div><img src={carousel_img_1}/></div>
          <Link to='/steps-to-publish'><div><img src={carousel_img_2}/></div></Link>
          <div><img src={carousel_img_3}/></div>
          <div><img src={carousel_img_1}/></div>
        </Slider>
      </div>
)

export default Carousel;