import axios from 'axios';
import React , {useState, useEffect} from 'react';
import { getAllCards, getCardByID,} from '../../services/axiosCRUDService';
import './axios.css';
const Axioscrudexample = () => {

    const [card, setCard] = useState(null);

    useEffect(() => {
        obtainCard();
    }, []);


    // CRUD Examples
    const obtainAllCards = () => {
        getAllCards()
            .then((response) => {
                if(response.data && response.status === 200){
                    alert(JSON.stringify(response.data));
                    console.log(JSON.stringify(response.data));
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
                    alert(JSON.stringify(response.data));
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
            <div>
            <h1>Titulo : {card.title}</h1>
            <h1>Username : {card.username}</h1>
            <h1>Description: {card.description}</h1>
            <h1>Category: {card.category}</h1>
            <h1>Rating: {card.rating}</h1>
            <h1>Price: {card.price}</h1>
            </div>
            )
            :null }
                <button onClick={obtainAllCards}>
                    Get All Cards
                </button>
               
                <button onClick={() => obtainCardByID(1)}>
                    Get Card 1
                </button>
            </div>
    );
}

export default Axioscrudexample;
