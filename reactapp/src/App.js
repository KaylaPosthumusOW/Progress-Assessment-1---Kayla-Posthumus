import React from 'react';
import './App.css';
import Navbar from './navbar';
import Homepage from './Homepage';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-colour">
      {/* Container */}
      <div className="container">
        <div className="row">
          <div className="col-2">
            {/* Navbar */}
            <Router>
              <Navbar />
                <Routes>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/Chat" component={Chat} />
                </Routes>
            </Router>
            
          </div>
          <div className="col-10">
            <Homepage />
            <Chat />
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default App;
