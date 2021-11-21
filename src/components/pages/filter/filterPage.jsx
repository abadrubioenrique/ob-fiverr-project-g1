import React from 'react';

import '../../../App.css';
import TableExample from '../../examples/tableExample';
import NavComponent from '../../nav/navComponet';

const FilterPage = () => {
    return (

    <div className="App">
            <NavComponent></NavComponent>
      <header className="App-header">

        <TableExample></TableExample>
      </header>
      </div>

    );
}

export default FilterPage;
