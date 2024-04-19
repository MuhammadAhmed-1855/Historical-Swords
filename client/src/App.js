import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Eras from './Pages/Eras';
import Makers from './Pages/Makers';
import Materials from './Pages/Materials';
import Types from './Pages/Types';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eras" element={<Eras />} />
        <Route path="/makers" element={<Makers />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/types" element={<Types />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
