import React from 'react';
import '../../../App.css';
import CardListFilter from '../../container/card_list_filter';
import NavComponent from '../../nav/navComponet';

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
