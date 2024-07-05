import React from 'react';
import Home from './Home';
import Question from './Question';
import Test from "./Test"
import Navbar from './Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    
    <Navbar />
      <Routes>
        {/* <Route element={<Layout />} > */}
          <Route path="/" element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="code" element={<Question />} />
          {/* <Route path="contact" element={<Contact />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
