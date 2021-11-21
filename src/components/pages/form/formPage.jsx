import React from 'react';
import '../../../App.css';
import CardForm from '../../Formularios/CardForm';
import NavComponent from '../../nav/navComponet';

const FormPage = () => {
    return (

    <div className="App">
        <div className="nav">
          <NavComponent></NavComponent>
    </div>
      <header className="App-header">

      <CardForm></CardForm>
      </header>
      </div>

    );
}

export default FormPage;
