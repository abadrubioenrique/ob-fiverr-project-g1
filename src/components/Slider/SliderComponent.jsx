
import React from "react";
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

//TODO Crear una función que pinte las estrellas en funcion de una puntuación obtenida
export default function App() {
   
  
  return (
    

  <div className="card rounded">
  <Swiper 
      style={{'--swiper-navigation-color': '#cecece','--swiper-pagination-color': '#cecece'}}
      zoom={true} navigation={true} pagination={{"clickable": true}} className="mySwiper">
    <SwiperSlide>
      <div className="card-img-top">
      <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157750073/original/006c1cd999f95a6f6847455a687ad8fb63be1738.jpg" 
        alt="img-1"
      />      
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="card-img-top">
        <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/3c61a8c4b737af30ff17ada9f97635ae-1621514830/Landing.jpg" 
          alt="img-2"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="card-img-top">
        <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png" 
          alt="img-3"
        />
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="card-img-top">
        <img src="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png" 
          alt="img-4"
        />
      </div>
    </SwiperSlide>
  </Swiper>

    <div className="card-body">
      <h5 className="card-title text-start">I will do UI UX design for your website</h5>
        
          <div className="user">
            <i className="bi bi-person-circle"/>
              <span>Username</span>
          </div>
          <div className="linea"></div>
          <div className="stars">
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star-half"></i>
            <i className="star bi bi-star"></i>
            <span>29.99 €</span>
          </div>
         
    
    </div>
    </div>
    
  
    
    
  )
}
