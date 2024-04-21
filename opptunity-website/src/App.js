import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import EmployerPage from './pages/EmployersPage';
import CandidatePage from './pages/CandidatePage';
// import logo from './logo.svg';  // Assuming logo is used somewhere else or removed if not needed.

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employers" element={<EmployerPage />} />
          <Route path="/candidates" element={<CandidatePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
