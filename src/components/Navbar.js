import './Navbar.css';
const photo = require('../image/omma-logo-big.png');

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <img className="logo-img" src={photo} />
      </div>
      <div className="nav">
        <span>Home</span>
        <span>About Us</span>
        <span>Menu</span>
        <span>Review</span>
      </div>
    </div>
  );
};

export default Navbar;
