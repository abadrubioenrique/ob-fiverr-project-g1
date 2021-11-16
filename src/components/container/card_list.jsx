import React, { useState, useEffect } from 'react';

//Importamos el modelo de card
import { Card } from '../models/card.class';
//Importamos el css de las card 
import '../Card/Card.css';
//Importamos el formulario de la card
import CardFormik from '../Formularios/CardFormik';
import CardComponent from '../Card/CardComponent';

const CardListComponent = () => {
    const defaultCard1 = new Card('Example','username','Description1',10.99,5,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);
    const defaultCard2 = new Card('Example','username','Description2',8.99,4,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);
    const defaultCard3 = new Card('Example','username','Description3',20.99,3,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);
    const defaultCard4 = new Card('Example','username','Description4',20.99,3,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);
    const defaultCard5 = new Card('Example','username','Description5',20.99,3,
    ['https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157750073/original/2ebbcdec8dfa206d22464f93e50d5429f5631523.png',
    'https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/157750073/original/7fad27143dca2503db2efcc620d299ae2f76d0cd.png']);

    // Estado del componente
    const [cards, setCards] = useState([defaultCard1, defaultCard2, defaultCard3,defaultCard4,defaultCard5]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Card State has been modified');
        setTimeout(()=>{
            setLoading(false);
        },1000);
        return () => {
            console.log('CardList component is going to unmount...');
        }
    }, [cards])

    const Table = () =>{
        return (
        <div className="body">
            { cards.map((card, index) => {
                    return (
                        <CardComponent 
                            key={index} 
                            card={card}>
                        </CardComponent>
                        )
                    }
            )}   
        </div>
        )
    }

    let cardsTable;
    if(cards.length>0){
        cardsTable = <Table></Table>
    }else{
        cardsTable = (
        <div>
        <h3>Ther are no cards to show</h3>
        <h4>Please, create one</h4>
        </div>
        )
    }
    
    const loadingStyle ={
        color:'grey',
        fontSize:'30px',
        fontWeight:'bold'
    }

    return (
        <div>
            {loading ? (<p style={loadingStyle}>Loading cards...</p>) : cardsTable}
        </div>

    );
};



export default CardListComponent;
