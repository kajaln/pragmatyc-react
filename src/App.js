import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import './App.css';
import Home from './Pages/Home/Home';
import NavigationBar from './layout/Header/NavigationBar';
import Services from "./Pages/Services/Services";
import Footer from "./layout/Footer/Footer";


function App() {
  return (
    <Router>
    <div className="App">
        <NavigationBar />
        <Routes>
				  <Route path="/" exact element={<Home />} /> 
          {/* <Route path="/services" exact element={} />  */}
				</Routes>
        <Footer />
       
			
		
    </div>
    </Router>
  );
}

export default App;
