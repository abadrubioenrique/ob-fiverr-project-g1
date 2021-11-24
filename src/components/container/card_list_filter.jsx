
import {useEffect, useState} from 'react';
import axios from "axios";
import CardComponent from '../Card/CardComponent';
import './filter.css';

const CardListFilter = () => {

  const [projects, setProjects]= useState([]);
  const [tablaProjects, setTablaProjects]= useState([]);
  const [busqueda, setBusqueda]= useState("");
  const [loading, setLoading] = useState(true);

  /**
   * Petición Get a la API
   */
  const peticionGet=async()=>{
    await axios.get("https://ob-fiverr-backend.herokuapp.com/api/cards")
      .then(response=>{
        setProjects(response.data);
        setTablaProjects(response.data);
        setLoading(false);
      }).catch(error=>{
        console.log(error);
      })
  }

  /**
   * OnChange
   * @param {event} e 
   */
  const handleChange=e=>{
    setBusqueda(e.target.value);
    filterData(e.target.value);
  }

  /**
   * Filtrar datos
   * @param {string} searchTerm 
   */
  const filterData=(searchTerm)=>{
  var searchResults=tablaProjects.filter((element)=>{
    console.log(element);
    if(element.category.toString().toLowerCase().includes(searchTerm.toLowerCase())
    ){
      return element;
    }
    return null;
  });
    setProjects(searchResults);
  }

  /**
   * UseEffect único
   */
  useEffect(()=>{
    peticionGet();
  },[])


  const Cards = () =>{
    return(
      <div className="App">
      <div className="containerInput">
            <input
              className="form-control inputSearch"
              value={busqueda}
              placeholder="Graphics & Design, Digital Marketing, Writing & Translation, Video & Animation, Music & Audio, Programming & Tech,Data, Business, Lifestyle"
              onChange={handleChange}
            />
          </div>
          <div className="body">        
              {projects && 
                  projects.map((card,index)=>(
                    <CardComponent 
                              key={index} 
                              card={card}
                              >
                          </CardComponent>
                  ))}
      </div>
    </div>
    )
  }

  let cardsTable;
    if(projects.length>0){
        cardsTable = <Cards></Cards>
    }else{
        cardsTable = (
        <div>
        <h2>Ther are no projects to show</h2>
        <h2>Please, create one</h2>
        </div>
        
        )
    }
    
    return (
        <div>
             {loading ? (<p className="loading">Loading projects...</p>) : cardsTable}
        </div>

    );
  }

export default CardListFilter;
