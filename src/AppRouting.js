import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Notfoundpage from './components/pages/404/NotFoundPage';
import './App.css';
import CardsPage from './components/pages/cards/cardsPage';
import FormPage from './components/pages/form/formPage';
import Carddetailpage from './components/pages/cards/cardsDetailPage';

function AppRouting() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<CardsPage />} />
          <Route path="/404" element={<Notfoundpage />} />
          <Route path="/add" element={<FormPage />} />
          <Route path="*" element={<Notfoundpage />} />
          <Route path="/projects/:id" element={<Carddetailpage />}/>

        </Routes>
      </Router>
  );
}

export default AppRouting;
