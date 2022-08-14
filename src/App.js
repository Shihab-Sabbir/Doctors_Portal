import React from 'react'
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from './componants/Home/Home/Home';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <Home> </Home>
    </div>
  )
}

export default App