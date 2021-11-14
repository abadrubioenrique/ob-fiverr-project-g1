import './App.css';
import CardComponent from './components/Card/CardComponent';
import CardFormik from './components/Card/CardFormik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App Works</h1>
          <div className="body">
          <CardComponent 
              title="I will 150 SEO backlinks white hat manual link aaaa"
              username="Manolo123"
              price={20.99}
              rating={5}
          ></CardComponent>      
          <CardComponent 
              title="I will get you featured on a google news website"
              username="Chocolateconleche"
              price={20.99}
              rating={4}
          ></CardComponent>  
          <CardComponent 
              title="I will provide SEO plan to rank page 1 in 2021"
              username="Paco"
              price={21.99}
              rating={3}
          ></CardComponent>  
          <CardComponent 
              title="I will fix wordpress SEO issues to help it rank better"
              username="Marina_seo"
              price={5.99}
              rating={5}
          ></CardComponent> 

          </div>
      </header>
    </div>
  );
}

export default App;
