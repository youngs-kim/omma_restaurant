import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="navbar" />
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
