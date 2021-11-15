import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./cardFormik.css";
const CardFormik = () => {
	const [formulario, setFormulario] = useState(false);
	return (
		
    <Formik
        initialValues={{
            title: '',
            username:'',
            category:'',
            description:'',
            price:'',
            rating:'',

        }}
        validate={(values) => {
            let errors = {};

            // Validation title
            if(!values.title){
                errors.title = 'Por favor ingresa un title'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,50}$/.test(values.title)){
                errors.title = 'El title solo puede contener letras y espacios, y no debe superar los 50 caracteres'
            }
            // Validation username
            if(!values.username){
                errors.username = 'Por favor ingresa un username'
            } else if(!/^[a-zA-ZÀ-ÿ\s]{1,16}$/.test(values.username)){
                errors.username = 'El username solo puede contener letras y espacios y no debe superar los 16 caracteres'
            }
            // Validation category
            if(!values.category){
                errors.category = 'Por favor ingrese una categoría'
            }
            // Validation description
            if(!values.description){
                errors.description = 'Por favor ingrese una descripción'
            }
            // Validation price
            if(!values.price){
                errors.price = 'Por favor ingrese un precio'
            }
            // Validation rating
            if(!values.rating){
                errors.rating = 'Por favor ingrese una valoración'
            }

            return errors;
        }}
        onSubmit={(values, {resetForm}) => {
            resetForm();
            console.log('Formulario enviado');
            console.log(values);
            
            setFormulario(true);
            setTimeout(() => setFormulario(false), 5000);
        }}
    >
        {( {errors} ) => (
            <Form className="formulario shadow">
                <div>
                    <label htmlFor="title">Title</label>
                    <Field
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Card Title"
                    />
                    <ErrorMessage name="title" component={() => (<div className="error">{errors.title}</div>)} />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <Field
                        type="text" 
                        id="username" 
                        name="username" 
                        placeholder="Username"
                    />
                    <ErrorMessage name="username" component={() => (<div className="error">{errors.username}</div>)} />
                </div>

                <div>
                <label htmlFor="category">Category</label>
                    <Field name="category" as="select">
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

                    </Field>
                    <ErrorMessage name="category" component={() => (<div className="error">{errors.category}</div>)} />
                </div>

                <div>
                <label htmlFor="description">Description</label>
                    <Field name="description" as="textarea" maxLength={255} placeholder="Card Description" />
                    <ErrorMessage name="description" component={() => (<div className="error">{errors.description}</div>)} />
                </div>
                <div>
                <label htmlFor="price">Price</label>
                    <Field name="price" type="number" placeholder="Price"  />
                    <ErrorMessage name="price" component={() => (<div className="error">{errors.price}</div>)} />
                </div>
                
                <div>
                <label htmlFor="rating">Rating</label>
                    <Field name="rating" as="select">
                        <option value="">-- Select rating --</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>

                    </Field>
                    <ErrorMessage name="rating" component={() => (<div className="error">{errors.rating}</div>)} />
                </div>
                
                <button type="submit">Enviar</button>
                {formulario && <p className="success">Formulario enviado con exito!</p>}
            </Form>
        )}

    </Formik>

	);
}
 
export default CardFormik;