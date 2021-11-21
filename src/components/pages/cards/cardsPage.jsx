import React from 'react';
import '../../../App.css';
import NavComponent from '../../nav/navComponet';
import CardListFilter from '../../examples/card_list_filter';

const CardsPage = () => {
    return (

    <div className="App">
    <div className="nav">
          <NavComponent></NavComponent>
    </div>
      <header className="App-header">

      <CardListFilter></CardListFilter>
      </header>
      </div>

    );
}

export default CardsPage;
