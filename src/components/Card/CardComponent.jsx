import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
//Importamos el modelo de card
import { Card } from '../models/card.class';
// Import Swiper styles
import 'swiper/swiper.min.css'; 
import 'swiper/modules/zoom/zoom.min.css'; 
import 'swiper/modules/navigation/navigation.min.css'; 
import 'swiper/modules/pagination/pagination.min.css'; 
// Styles
import "../../styles.css";
import "./Card.css";
// import Swiper core and required modules
import SwiperCore, {
  Zoom,Navigation,Pagination
} from 'swiper';

// Swiper modules
SwiperCore.use([Zoom,Navigation,Pagination]);

const CardComponent=({card})=> {
  useEffect(() => {
    console.log('Created Card')
    console.log(`Card: ${card.title}`)
    return () => {
        console.log(`Card: ${card.title} is going to unmount`);
    }
}, [card]);

  const rating=card.rating;
  const numImg=card.pictures.length;
  
  return (
    
  <div className="card shadow p-1 mb-5 bg-white rounded ">
  {/* Añadimos un operador ternario para barajar los casos en los que no haya ninguna imagen a */}
  {numImg!==0 ?
      <Swiper 
          style={{'--swiper-navigation-color': '#bababa','--swiper-pagination-color': '#fff'}}
          zoom={true} navigation={true} pagination={{"clickable": true}} className="mySwiper">
          {/* Recorremos el array de las url de las imagenes */}
          {card.pictures.map((value,index)=>{
            return(
              <SwiperSlide>
                <div className="card-img-top">
                  <img key={index} src= {value}
                  alt={"Imagen " + index}
                  />
                </div>
            </SwiperSlide>
        )  
          })}
      </Swiper>
      : 
      (
        <div className="no-img">
          <h1>No hay imágenes disponibles</h1>
        </div>
      )
    }
    <div className="card-body">
      <h5 className="card-title text-start">{card.title}</h5>
      
          <div className="user">
            <i className="bi bi-person-circle"/>
              <span>{card.username}</span>
          </div>
          <div className="linea"></div>
          <div className="stars">
          {/* <p>{rating} stars</p> */}
          {/* TODO Crear una función que pinte las estrellas en funcion de una puntuación obtenida */}
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star"></i>
            <i className="star bi bi-star"></i>
            <span>{card.price} €</span>
          </div>  
    </div>
    </div>
  )
}
CardComponent.propTypes = {
  card :PropTypes.instanceOf(Card).isRequired,

};

export default CardComponent;
