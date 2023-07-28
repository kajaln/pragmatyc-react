import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import './App.css';
import Home from './Pages/Home/Home';
import NavigationBar from './layout/Header/NavigationBar';

import Footer from "./layout/Footer/Footer";
import OurServices from "./Pages/Services/OurServices";
import ProductConsulting from "./Pages/Services/ProductConsulting";
import ProductDevelopment from "./Pages/Services/ProductDevelopment";
import ProductModernization from "./Pages/Services/ProductModernization";




function App() {
  return (<>
    <Router>
    <div className="App">
        <NavigationBar />
        <Routes>
            <Route path="/" exact element={<Home />} /> 
            {/* <Route path="/services" exact element={<OurServices />} />  */}
            <Route path="/product-consulting" exact element={<ProductConsulting />} /> 
            <Route path="/product-development" exact element={<ProductDevelopment />} /> 
            <Route path="/product-modernization" exact element={<ProductModernization />} /> 
            {/* <Route path="/services" exact element={<OurServices />} />  */}
				</Routes>
        <Footer />		
    </div>
    </Router>
    </>
  );
}

export default App;
