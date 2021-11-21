import React , {useState, useEffect} from 'react';
import { getAllCards, getCardByID,} from '../../services/axiosCRUDService';
import './axios.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; 
import 'swiper/modules/zoom/zoom.min.css'; 
import 'swiper/modules/navigation/navigation.min.css'; 
import 'swiper/modules/pagination/pagination.min.css'; 
// Styles
import "../../styles.css";
import "../Card/Card.css";
// import Swiper core and required modules
import SwiperCore, {
  Zoom,Navigation,Pagination
} from 'swiper';

// Swiper modules
SwiperCore.use([Zoom,Navigation,Pagination]);

const Axioscrudexample = () => {

    const [card, setCard] = useState(null);
   

    useEffect(() => {

    }, []);



    // CRUD Examples
    const obtainAllCards = () => {
        getAllCards()
            .then((response) => {
                if(response.data && response.status === 200){
                    console.log(response.data);
                    setCard(response.data);
                }else{
                    throw new Error(`No Cards found`)
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    const obtainCardByID = (id) => {
        getCardByID(id)
            .then((response) => {
                if(response.data && response.status === 200){
                    console.log(JSON.stringify(response.data));
                    setCard(response.data);
                    
                }else{
                    throw new Error('Card not found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

     const obtainCard = (id) => {
        getCardByID(1)
            .then((response) => {
                if(response.status === 200){
                    // console.table(response.data.results[0])
                    setCard(response.data);

                }
            })
            .catch((error) => {
                alert(`Somethin went wrong: ${error}`);
            })
    } 

    

    return (
        <div>        
        { card !== null ?  
        (
        <div className="card shadow p-1 mb-5 bg-white rounded ">
          {/* Añadimos un operador ternario para barajar los casos en los que no haya ninguna imagen a */}
          {card.pictures.length!==0 ?
              <Swiper 
                  style={{'--swiper-navigation-color': '#bababa','--swiper-pagination-color': '#fff'}}
                  zoom={true} navigation={true} pagination={{"clickable": true}} className="mySwiper">
                  {/* Recorremos el array de las url de las imagenes */}
                  
                  {card.pictures.map(i=>{
                    return(
                      <SwiperSlide>
                        <div className="card-img-top">
                          <img key={i} src= {i.url}
                          alt={"Imagen " + i.id}
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
                    :null }
    </div>
    );
}

export default Axioscrudexample;
