import './table.css';
import {useEffect, useState} from 'react';
import axios from "axios";



const TableExample = () => {

const [projects, setProjects]= useState([]);
const [tablaProjects, setTablaProjects]= useState([]);
const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
await axios.get("https://ob-fiverr-backend.herokuapp.com/api/cards")
.then(response=>{
  setProjects(response.data);
  setTablaProjects(response.data);
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
  if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
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
        placeholder="Search by category 1-9"
        onChange={handleChange}
      />

    </div>

   <div className="table-responsive">
     <table className="table table-sm table-bordered">
       <thead>
         <tr>
           <th>ID</th>
           <th>Title</th>
           <th>Username</th>
           <th>Description</th>
           <th>Category</th>
           <th>Rating</th>
           <th>Price</th>

         </tr>
       </thead>

       <tbody>
         {projects && 
            projects.map((projects)=>(
           <tr key={projects.id}>
             <td>{projects.id}</td>
             <td>{projects.title}</td>
             <td>{projects.username}</td>
             <td>{projects.description}</td>
             <td>{projects.category}</td>
             <td>{projects.rating}</td>
             <td>{projects.price}</td>
           </tr>
         ))}
       </tbody>

     </table>

   </div>
  </div>
);
}

export default TableExample;
