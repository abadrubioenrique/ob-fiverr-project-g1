
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; 
import 'swiper/modules/zoom/zoom.min.css'; 
import 'swiper/modules/navigation/navigation.min.css'; 
import 'swiper/modules/pagination/pagination.min.css'; 

import "../styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Zoom,Navigation,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom,Navigation,Pagination]);


export default function SliderComponent() {
  
  
  
  return (
    <>
    
  <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} zoom={true} navigation={true} pagination={{
  "clickable": true
}} className="mySwiper">
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </div>
        </SwiperSlide><SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </div>
        </SwiperSlide>
  </Swiper>
    </>
  )
}
