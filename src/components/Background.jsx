import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from "./Navigation";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const Background = () => {
  return (
    <Router>
      <div className="grid pr-1">
        <div className="col-span-1 m-8">
          <Navigation />
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    );
  };
  

export default Background;
