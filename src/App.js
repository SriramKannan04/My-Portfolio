import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


import Navbar from './Navbar';
import Contact from './Contact'
import Homepage from './Homepage';
import Skills from './Skills';
import Education from './Education';
import Certificates from './Certificates';
import Projects from './Projects';


function App() {
  return (
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/Homepage' exact element={<Homepage />}/>
              <Route path='/Contact' element={<Contact/>} />
              <Route path='/Skills' element={<Skills/>} />
              <Route path='/Education' element={<Education/>} />
              <Route path='/Certificates'element={<Certificates/>} />
              <Route path='/Projects'element={<Projects/>} />
            </Routes>
        </Router>
      </div>
  );
}

export default App;
