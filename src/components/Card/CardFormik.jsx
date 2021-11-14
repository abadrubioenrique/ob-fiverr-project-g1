import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const CardFormik = () => {

    const initialValues = {
        title: '',
        description: '',
        price: '',
    }

    const registerSchema = Yup.object().shape(
        {
            title: Yup.string()
                .min(6, 'Title too short')
                .max(50, 'Title too long')
                .required('Title is required'),
            price: Yup.number()
                .required('Price is required'),
        }
    )


    return (
        <div>
            <h4>Create a Card</h4>
            <Formik
                initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {registerSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                     }) => (
                        <Form>
                            <label htmlFor="title">Title</label>
                            <Field id="title" type="text" name="title" placeholder="Your title" />
                            
                            {/* title Errors */}
                            {
                                errors.title && touched.title && 
                                (
                                    <ErrorMessage name="title" component='div'></ErrorMessage>
                                )
                            }
                            <label htmlFor="description">Description</label>
                            <Field id="description" type="text" name="description" placeholder="Your description" maxlength="500" />
                            

                            <label htmlFor="price">Price</label>
                            <Field id="price" type="number" name="price" placeholder="Price" />
                             {/* price Errors */}
                             {
                                errors.title && touched.title && 
                                (
                                    <ErrorMessage name="price" component='div'></ErrorMessage>
                                )
                            }                            
                            <button type="submit">Add Card</button>
                            {isSubmitting ? (<p>Sending your card...</p>): null}

                        </Form>
                    )
            }

            </Formik>

        </div>
    );
}

export default CardFormik;
