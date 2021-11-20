import React from 'react';

import '../../../App.css';
import TableExample from '../../examples/tableExample';
import NavComponent from '../../nav/navComponet';

const FilterPage = () => {
    return (

    <div className="App">
      <header className="App-header">
        <NavComponent></NavComponent>
        <TableExample></TableExample>
      </header>
      </div>

    );
}

export default FilterPage;
