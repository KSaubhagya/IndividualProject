import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from "@asgardeo/auth-react";
import Home from './pages/Home';
import QuizPage from './pages/Quiz';
import FileUpload from './pages/FileUpload';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading'; // Create a simple loading spinner component
import './App.css';

function App() {
  const { state } = useAuthContext();

  // Show loading state while authentication status is being determined
  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Router>
        {/* Navbar is always visible and handles auth state internally */}
        <Navbar />
        <Routes>
          {/* Public route */}
          <Route path="/" element={<Home />} />
          
          {/* Protected routes */}
          <Route 
            path="/quiz" 
            element={
              state.isAuthenticated ? (
                <QuizPage />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/FileUpload" 
            element={
              state.isAuthenticated ? (
                <FileUpload />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          
        
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
         
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;