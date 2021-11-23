import { useState, useEffect } from 'react';
import { getAllCards} from '../services/axiosCRUDService';
export const useCards = ()=>{

    // Estado del componente
    const [loading, setLoading] = useState(true);
    const [projects, setProjects]= useState([]);
    const [tableProjects, setTableProjects]= useState([]);

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
                setProjects(response.data);
                setTableProjects(response.data);
            }else{
                throw new Error(`No Cards found`)
            }
    }

    return{
        projects,tableProjects, loading
    }


}