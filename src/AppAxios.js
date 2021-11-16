import './App.css';
import CardComponent from './components/Card/CardComponent';
import CardListComponent from './components/container/card_list';
import Axioscrudexample from './components/examples/AxiosCRUD';
import CardFormik from './components/Formularios/CardFormik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App Works</h1>
        <Axioscrudexample></Axioscrudexample>

      </header>
    </div>
  );
}

export default App;
