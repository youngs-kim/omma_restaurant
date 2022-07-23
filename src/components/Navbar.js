import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
const photo = require('../image/omma-logo-big.png');

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img className="logo-img" src={photo} />
      </div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <span>Menu</span>
        <span>Review</span>
      </div>
    </div>
  );
};

export default Navbar;
