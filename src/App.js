import './App.css';
import CardComponent from './components/Card/CardComponent';
import CardListComponent from './components/container/card_list';
import CardFormik from './components/Formularios/CardFormik';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <CardComponent></CardComponent> */}
          {/* <CardListComponent></CardListComponent> */}
          <CardFormik></CardFormik>

      </header>
    </div>
  );
}

export default App;
