import React from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cards from './Components/Cards';
import CardsDetails from './Components/CardsDetails';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart/:id' element={<CardsDetails />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
