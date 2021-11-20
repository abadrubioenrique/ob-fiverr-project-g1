import { useState, useEffect } from 'react';
import { getAllCards} from '../services/axiosCRUDService';
export const useCards = ()=>{

    // Estado del componente
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false);
        },1000);
        obtainAllCards();
    },[])

    const obtainAllCards = async() => {
        const response = await getAllCards()
            if(response.data && response.status === 200){
                setCards(response.data);

            }else{
                throw new Error(`No Cards found`)
            }

    }

    return{
        cards, loading
    }


}