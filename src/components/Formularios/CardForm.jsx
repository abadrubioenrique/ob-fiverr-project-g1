import React, {useState} from 'react';

import "./cardForm.css";
import axios from '../../utils/config/axios.config.js';

const CardForm = () => {
	const [formulario, setFormulario] = useState(false);
    
    //URL de la API
    const ApiUrl="https://ob-fiverr-backend.herokuapp.com/api/cards";

    const [card, setCard] = useState(
        {
            data:[],
            form:{
              id:'',
              title: '',
              username: '',
              category: '',
              description:'',
              rating: '',
              price: ''
            },
          }
    );
    
      /**
       * Peticion Get a la API
       */
      const peticionGet=()=>{
        setTimeout(() => setFormulario(false), 3000);
      axios.get(ApiUrl).then(response=>{
        setCard({data: response.data});
      }).catch(error=>{
        console.log(error.message);
      })
      }

      /**
       * Peticion Get a la API
       */
      const peticionPost=async()=>{
       await axios.post(ApiUrl,
        {
          id:card.form.id,
          title:card.form.title,
          username:card.form.username,
          description:card.form.description,
          category:card.form.category,
          rating:card.form.rating,
          price:card.form.price,
          pictures:[{
            url:card.form.url
          }]
        }
       ).then(response=>{
          peticionGet();
        }).catch(error=>{
          console.log(error.message);
        })
      }
      
      /**
       * OnChange
       * @param {*} e 
       */
      const handleChange=async e=>{
      e.persist();
      await setCard({
        form:{
          ...card.form,
          [e.target.name]: e.target.value  
        }
      });
      }
      const handleSubmit=async e=>{
        e.preventDefault(setFormulario(false));
        peticionPost();
      }

      const {form}=card;
    
	return (
        <>
        <h1>New Project</h1>
        <form onSubmit={handleSubmit} className="formulario shadow">

            <label htmlFor="id">Title</label>
            <input className="form-control" maxLength="50" type="text" name="title" id="title" required onChange={handleChange} value={form?form.title: ''}/>

            <label htmlFor="username">Username</label>
            <input className="form-control" type="text" name="username" id="username" required onChange={handleChange} value={form?form.username: ''}/>

            <label htmlFor="category">Category</label>
            <select name="category" id="category" onChange={handleChange} value={form?form.category: ''}>
                <option value="">-- Select a category --</option>
                <option value="Graphics & Design">Graphics & Design</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Writing & Translation">Writing & Translation</option>
                <option value="Video & Animation">Video & Animation</option>
                <option value="Music & Audio">Music & Audio</option>
                <option value="Programming & Tech">Programming & Tech</option>
                <option value="Data">Data</option>
                <option value="Business">Business</option>
                <option value="Lifestyle">Lifestyle</option>
            </select>
            
            <label htmlFor="rating">Description</label>
            <textarea maxLength="255" name="description" id="description" required onChange={handleChange} value={form?form.description: ''}>
            </textarea>
            <label htmlFor="price">Price</label>
            <input className="form-control" type="number" name="price" id="price" required onChange={handleChange} value={form?form.price:''}/>
            <label htmlFor="rating">Rating</label>
            <select name="rating" id="rating" onChange={handleChange} required value={form?form.rating: ''}>
            <option value="">-- Select rating --</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
            </select>
            <label htmlFor="url">Url for image</label>
            <input className="form-control" type="text" name="url" id="url" required onChange={handleChange} value={form?form.url:''}/>
            <div className="enviar">
            <button type="submit" className="btn btn-success" >Add</button>
            {formulario && <p className="success">Form sent successfully!</p>}
            </div>

        </form>
        </>
    
	);
}

 
export default CardForm;