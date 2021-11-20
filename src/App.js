import './App.css';
import CardComponent from './components/Card/CardComponent';
import CardListComponent from './components/container/card_list';
import CardForm from './components/Formularios/CardForm';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <CardComponent></CardComponent> */}
          {/* <CardListComponent></CardListComponent> */}
          <CardForm></CardForm>

      </header>
    </div>
  );
}

export default App;
