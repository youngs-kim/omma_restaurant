import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Navbar.css';
import About from './AboutUs';
import MainPage from './MainPage';
import Menu from './Menu';
import Review from './Review';
const photo = require('../image/omma-logo-big.png');

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Router>
        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={photo} alt="logo" />
          </Link>
        </div>
        <nav className="nav">
          <Link className="nav-menu" to="/">
            Home
          </Link>
          <Link className="nav-menu" to="/about">
            About Us
          </Link>
          <Link className="nav-menu" to="menu">
            Menu
          </Link>
          {/* <Link className="nav-menu special" to="review">
            Review
          </Link> */}
        </nav>
        <hr />
        <Routes>
          {/* <Route path="/omma_restaurant" element={<MainPage />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Navbar;
