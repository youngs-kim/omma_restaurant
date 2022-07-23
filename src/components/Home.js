import Navbar from './Navbar';
import MainPage from './MainPage';
import './Home.css';
import { Routes, Route } from 'react-router-dom';
import About from './AboutUs';

function Home() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default Home;
