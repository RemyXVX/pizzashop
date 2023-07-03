import Home from "../pages/Home";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from 'react-router-dom';

const Background = () => {
  return (
    <Router>
      <div className="grid grid-cols-4">
        <div className="col-span-1">
          <Navigation />
        </div>
        <div className="col-span-3">
          <Home />
        </div>
      </div>
    </Router>
  );
};

export default Background;
