
import {useEffect, useState} from 'react';
import axios from "axios";
import CardComponent from '../Card/CardComponent';
import './table.css';

const CardListFilter = () => {

const [projects, setProjects]= useState([]);
const [tablaProjects, setTablaProjects]= useState([]);
const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
await axios.get("https://ob-fiverr-backend.herokuapp.com/api/cards")
.then(response=>{
  setProjects(response.data);
  setTablaProjects(response.data);
  console.log("Use Card: " + JSON.stringify(response.data));
}).catch(error=>{
  console.log(error);
})
}

const handleChange=e=>{
setBusqueda(e.target.value);
filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
var resultadosBusqueda=tablaProjects.filter((elemento)=>{
  console.log(elemento);
  if(elemento.category.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
  ){
    return elemento;
  }
  return null;
});
setProjects(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])

return (
  <div className="App">

<div className="containerInput">
      <input
        className="form-control inputBuscar"
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
);
}

export default CardListFilter;
