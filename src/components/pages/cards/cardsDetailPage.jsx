import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getCardByID } from '../../../services/axiosCRUDService';
import NavComponent from '../../nav/navComponet';


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
    
    return (
       

   <div className="App">
    <div className="nav">
          <NavComponent></NavComponent>
    </div>
      <header className="App-header">

      <div>
        {loading ? (<p className="loading">Loading projects...</p>) : 
        (
        <div>
        
        <h1 className="title">Title: {card.title}</h1>
        <h3>Username: {card.username}</h3>
        <p>Description: {card.description}</p>
        <h3>Category: {card.category}</h3>
        <h3>Price: {card.price}</h3>
        <h3>Rating: {card.rating}</h3>
        </div>
       ) 
        }
   </div>
      </header>
      </div>


       
       
    );


}

export default Carddetailpage;