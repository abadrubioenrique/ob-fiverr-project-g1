import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
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
import { Link } from "react-router-dom";
// Swiper modules
SwiperCore.use([Zoom,Navigation,Pagination]);

const CardComponent=({card})=> {

  const rating=card.rating;
  const numImg=card.pictures.length;
  
/**
 * Mostrar estrellas en funcion del rating
 * @param {*} rating 
 * @returns 
 */
  const contarStrellas= (rating)=>{
    switch(rating){
      case 1:
        return (
            <div className="stars">
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star"></i>
            <i className="star bi bi-star"></i>
            <i className="star bi bi-star"></i>
            <i className="star bi bi-star"></i>
            <span>{card.price} €</span>
          </div> ) ;
        case 2:
          return (
            <div className="stars">
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star"></i>
            <i className="star bi bi-star"></i>
            <i className="star bi bi-star"></i>
            <span>{card.price} €</span>
          </div>  
          );
          case 3:
            return (
              <div className="stars">
              <i className="star bi bi-star-fill"></i>
              <i className="star bi bi-star-fill"></i>
              <i className="star bi bi-star-fill"></i>
              <i className="star bi bi-star"></i>
              <i className="star bi bi-star"></i>
              <span>{card.price} €</span>
            </div> 
            );
            case 4:
              return (
                <div className="stars">
                <i className="star bi bi-star-fill"></i>
                <i className="star bi bi-star-fill"></i>
                <i className="star bi bi-star-fill"></i>
                <i className="star bi bi-star-fill"></i>
                <i className="star bi bi-star"></i>
                <span>{card.price} €</span>
              </div> 
              );
              case 5:
                return (
                  <div className="stars">
                  <i className="star bi bi-star-fill"></i>
                  <i className="star bi bi-star-fill"></i>
                  <i className="star bi bi-star-fill"></i>
                  <i className="star bi bi-star-fill"></i>
                  <i className="star bi bi-star-fill"></i>
                  <span>{card.price} €</span>
                </div> 
                );
                default:
                  return rating;
    }
  }

  return (
    
  <div className="card shadow p-1 mb-5 bg-white rounded ">
  {/* Añadimos un operador ternario para barajar los casos en los que no haya ninguna imagen a */}
  {numImg!==0 ?
    <>

      <Swiper 
          style={{'--swiper-navigation-color': '#bababa','--swiper-pagination-color': '#fff'}}
          zoom={true} navigation={true} pagination={{"clickable": true}} className="mySwiper">

          {/* Recorremos el array de las url de las imagenes */}
          {card.pictures.map((i,index)=>{
            return(
              
              <SwiperSlide key={index}>
                <div className="card-img-top">
                <img  src= {i.url}
                      alt={"Imagen " + i.id}
                />
                </div>
            </SwiperSlide>
        
        )  
          })}
      </Swiper>
      </>
      : 
      (
        <div className="no-img">
          <h1>No hay imágenes disponibles</h1>
        </div>
      )
    }
    <div className="card-body">
      <h5 className="card-title text-start">
      <Link to={`/projects/${card.id}`}>{card.title}</Link>
      </h5>

      
          <div className="user">
            <i className="bi bi-person-circle"/>
              <span>{card.username}</span>
          </div>
          <div className="linea"></div>

    <div>{contarStrellas(rating)}</div>
  


    </div>
    </div>
  )
}

export default CardComponent;
