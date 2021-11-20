import React from 'react';
import CardListComponent from '../../container/card_list';
import '../../../App.css';
import NavComponent from '../../nav/navComponet';

const CardsPage = () => {
    return (

    <div className="App">
      <header className="App-header">
      <NavComponent></NavComponent>
      <CardListComponent></CardListComponent>
      </header>
      </div>

    );
}

export default CardsPage;
