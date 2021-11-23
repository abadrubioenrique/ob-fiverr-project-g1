import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getCardByID } from '../../../services/axiosCRUDService';
import NavComponent from '../../nav/navComponet';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; 
import 'swiper/modules/zoom/zoom.min.css'; 
import 'swiper/modules/navigation/navigation.min.css'; 
import 'swiper/modules/pagination/pagination.min.css'; 
// Styles
import "../../../styles.css"
import "../../Card/Card.css";
import "./cardsDetail.css";
// import Swiper core and required modules
import SwiperCore, {
  Zoom,Navigation,Pagination
} from 'swiper';
// Swiper modules
SwiperCore.use([Zoom,Navigation,Pagination]);

const Carddetailpage = () => {

    const {id} = useParams();
    console.log("Id:" + id);

    const [card, setCard] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        obtainOneCard(id);
    },[id])

    const obtainOneCard = async(id) => {
        const response = await getCardByID(id)
            if(response.data && response.status === 200){
                setCard(response.data);
                setLoading(false);
            }else{
                throw new Error(`No Cards found`)
            }

    }
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
          </div> ) ;
        case 2:
          return (
            <div className="stars">
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star-fill"></i>
            <i className="star bi bi-star"></i>
            <i className="star bi bi-star"></i>
            <i className="star bi bi-star"></i>
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
                </div> 
                );
                default:
                  return rating;
    }
  }
    return (
       

   <div className="App">
    <div className="nav">
          <NavComponent></NavComponent>
    </div>
      <header className="App-header">

      <div className="details">
        {loading ? (<p className="loading">Loading projects...</p>) : 
        (
        <>
        
        <div className="fotos">

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
      </div>
          <div className="detail">
              <h1 className="title">{card.title}</h1>
                  <span>by </span>
                  <span className="username">{card.username}</span>
              <div className="description Derecha">
                  <p>{card.description}</p>
              </div>
                  <h3>Category: {card.category}</h3>
                  <h3>Price: {card.price}€</h3>
              <div className="puntuacion">
              {contarStrellas(card.rating)}
              </div>
          </div>

        </>
       ) 
        }
      </div>
      </header>
    </div>


       
       
    );


}

export default Carddetailpage;