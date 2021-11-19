import React, {useState, useRef,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage,useFormikContext } from 'formik';
import { Card } from '../../models/card.class';
import "./cardFormik.css";
import axios from '../../utils/config/axios.config.js';

const CardFormik = () => {
	const [formulario, setFormulario] = useState(false);

    const [num, setNum] = useState(0);
    
    const ApiUrl="http://ob-fiverr-backend.herokuapp.com/api/cards/";

    const defaultState = {
        url: ""
      };
      
      function Row({ onChange, onRemove, url }) {
        return (
          <>
          <label htmlFor="url">url</label>
            <input
              value={url}
              onChange={(e) => onChange("url", e.target.value)}
              placeholder="URL"
            />
      
            <button className="btn btn-outline-danger eliminar" onClick={onRemove}><i class="bi bi-dash-circle"></i></button>
          </>
        );
      }

      const [rows, setRows] = useState([defaultState]);

  const handleOnChange = (index, name, value) => {
    const copyRows = [...rows];
    copyRows[index] = {
      ...copyRows[index],
      [name]: value
    };
    setRows(copyRows);
  };

  const handleOnAdd = () => {
    setRows(rows.concat(defaultState));
  };

  const handleOnRemove = (index) => {
    const copyRows = [...rows];
    copyRows.splice(index, 1);
    setRows(copyRows);
  };

    const [card, setCard] = useState(
        {
            data:[],
            modalInsertar: false,
            modalEliminar: false,
            form:{
              id:'',
              title: '',
              username: '',
              category: '',
              rating: '',
              price: ''
          
            }
          }

    );
      
      const peticionGet=()=>{
        setFormulario(true);
        setTimeout(() => setFormulario(false), 3000);
      axios.get(ApiUrl).then(response=>{
        setCard({data: response.data});
      }).catch(error=>{
        console.log(error.message);
      })
      }
      
      const peticionPost=async()=>{
           delete card.form.id; 
       await axios.post(ApiUrl,card.form).then(response=>{
          peticionGet();
        }).catch(error=>{
          console.log(error.message);
        })
      }
      

      const handleChange=async e=>{
      e.persist();
      await setCard({
        form:{
          ...card.form,
          [e.target.name]: e.target.value
        }
      });
      console.log(card.form);
      }
      const {form}=card;
    
	return (
        <>
        <h1>Creacion de una Card</h1>
        <div className="formulario shadow">

            <label htmlFor="id">Title</label>
            <input className="form-control" type="text" name="title" id="title" onChange={handleChange} value={form?form.title: ''}/>

            <label htmlFor="username">Username</label>
            <input className="form-control" type="text" name="username" id="username" onChange={handleChange} value={form?form.username: ''}/>

            <label htmlFor="category">Category</label>
            <select name="category" id="category" onChange={handleChange} value={form?form.category: ''}>
                <option value="">-- Select a category --</option>
                <option value="1">Graphics & Design</option>
                <option value="2">Digital Marketing</option>
                <option value="3">Writing & Translation</option>
                <option value="4">Video & Animation</option>
                <option value="5">Music & Audio</option>
                <option value="6">Programming & Tech</option>
                <option value="7">Data</option>
                <option value="8">Business</option>
                <option value="9">Lifestyle</option>

            </select>

            <label htmlFor="price">Price</label>
            <input className="form-control" type="number" name="price" id="price" onChange={handleChange} value={form?form.price:''}/>
            <label htmlFor="rating">Rating</label>
            <select name="rating" id="rating" onChange={handleChange} value={form?form.rating: ''}>
            <option value="">-- Select rating --</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
            </select>
    <div >
      {rows.map((row, index) => (
        <Row
          {...row}
          onChange={(name, value) => handleOnChange(index, name, value)}
          onRemove={() => handleOnRemove(index)}
          key={index}
        />
      ))}
      <button className="btn btn-success agregar" onClick={handleOnAdd}><i class="bi bi-plus-circle"></i></button>
    </div>
            <div className="enviar">
            <button type="submit" className="btn btn-success" onClick={()=>peticionPost()}>Crear</button>
            {formulario && <p className="success">Formulario enviado con exito!</p>}
            </div>

        </div>
        </>
    
	);
}

 
export default CardFormik;