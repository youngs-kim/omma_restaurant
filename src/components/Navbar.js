import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className="logo">
        <h1>Omma Restaurant</h1>
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
