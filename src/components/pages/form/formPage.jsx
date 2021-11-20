import React from 'react';
import '../../../App.css';
import CardForm from '../../Formularios/CardForm';
import NavComponent from '../../nav/navComponet';

const FormPage = () => {
    return (

    <div className="App">
      <header className="App-header">
      <NavComponent></NavComponent>
      <CardForm></CardForm>
      </header>
      </div>

    );
}

export default FormPage;
