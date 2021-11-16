import React, { useState, useEffect } from 'react';

//Importamos el modelo de card
import { Card } from '../models/card.class';
//Importamos el css de las card 
import '../Card/Card.css';
//Importamos el formulario de la card
import CardFormik from '../Formularios/CardFormik';
import CardComponent from '../Card/CardComponent';

const CardListComponent = () => {
    const defaultCard1 = new Card('Example1','username1','Description1',10.99,5);
    const defaultCard2 = new Card('Example2','username2','Description2',8.99,4);
    const defaultCard3 = new Card('Example3','username3','Description3',20.99,3);
    const defaultCard4 = new Card('Example4','username4','Description4',20.99,3);
    const defaultCard5 = new Card('Example5','username5','Description5',20.99,3);

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

/*
    function completeCard(card){
        console.log('Complete this Task:', card);
        const index = cards.indexOf(card);
        const tempcards = [...cards];
        tempcards[index].completed = !tempcards[index].completed;
        // We update the state of the component with the new list of cards and it will update the
        // Iteration of the cards in order to show the task updated
        setCards(tempcards);
    }

    function deleteCard(card){
        console.log('Detele this Task:', card);
        const index = cards.indexOf(card);
        const tempcards = [...cards];
        tempcards.splice(index,1);
        setCards(tempcards);
    }

    function addCard(card){
        console.log('Detele this Card:', card);
        const tempcards = [...cards];
        tempcards.push(card);
        setCards(tempcards);
    }
*/
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
