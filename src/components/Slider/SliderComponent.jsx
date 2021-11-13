
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; 
import 'swiper/modules/zoom/zoom.min.css'; 
import 'swiper/modules/navigation/navigation.min.css'; 
import 'swiper/modules/pagination/pagination.min.css'; 

import "../../styles.css";

import "./slidercomponent.css";

// import Swiper core and required modules
import SwiperCore, {
  Zoom,Navigation,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom,Navigation,Pagination]);


export default function App() {
  
  
  
  return (
    

  <div className="card rounded">
  <Swiper 
      style={{'--swiper-navigation-color': '#cecece','--swiper-pagination-color': '#cecece'}}
      zoom={true} navigation={true} pagination={{"clickable": true}} className="mySwiper">
    <SwiperSlide>
      <div className="card-img-top">
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="card-img-top">
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="card-img-top">
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="card-img-top">
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </div>
    </SwiperSlide>
  </Swiper>

    <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="user"><i className="bi bi-person-circle"/>Username</div>
    </div>
    
  
</div>
    
    
  )
}
