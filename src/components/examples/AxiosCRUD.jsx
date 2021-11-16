import React , {useState} from 'react';
import { getAllCards, getCardByID,} from '../../services/axiosCRUDService';

const Axioscrudexample = () => {

    // CRUD Examples
    const obtainAllCards = () => {
        getAllCards()
            .then((response) => {
                if(response.data){
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
                if(response.data){
                    alert(JSON.stringify(response.data));
                    console.log(JSON.stringify(response.data));
                }else{
                    throw new Error('Card not found')
                }
            })
            .catch((error) => alert(`Something went wrong: ${error}`))
    }

    

    return (
        <div>
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllCards}>
                    Get All Cards
                </button>
               
                <button onClick={() => obtainCardByID(1)}>
                    Get Card 1
                </button>
            
            </div>
        </div>
    );
}

export default Axioscrudexample;
