import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/Home';
import { Login } from './pages/LoginPage';
import QuizPage from './pages/Quiz';
import FileUpload from './pages/FileUpload';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Quiz" element={<QuizPage />} />
      <Route path="/FileUpload" element={<FileUpload />} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
