import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Notfoundpage from './components/pages/404/NotFoundPage';
import './App.css';
import CardsPage from './components/pages/cards/cardsPage';
import CardForm from './components/Formularios/CardForm';
import FormPage from './components/pages/form/formPage';
import navComponent from './components/nav/navComponet';
import FilterPage from './components/pages/filter/filterPage';

function AppRouting() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<CardsPage />} />
          <Route path="/404" element={<Notfoundpage />} />
          <Route path="/add" element={<FormPage />} />
          <Route path="/filter" element={<FilterPage/>} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </Router>
  );
}

export default AppRouting;