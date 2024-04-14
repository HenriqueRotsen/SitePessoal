import React, { useState } from 'react';
import Header from './components/header.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
