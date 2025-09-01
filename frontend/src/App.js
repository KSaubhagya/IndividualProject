import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminDashboard";
import AdminBlog from "./pages/AdminBlogs";
import Coaching from "./pages/CoachingPage";
import Module from "./pages/ModulesBlogsPage";
import FileUpload from "./pages/FileUpload";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Loading from "./components/Loading";
import BlogDetail from "./pages/BlogDetail";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import AccessDenied from "./components/AccessDenied";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const { state } = useAuthContext();

  // Loading state
  if (state.isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          {/* Public route */}
          <Route path="/" element={<Home />} />
          <Route path="/denied" element={<AccessDenied />} />

          {/* Protected routes */}

          <Route
            path="/FileUpload"
            element={
              <ProtectedRoute isAuthenticated={state.isAuthenticated}>
                <FileUpload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute isAuthenticated={state.isAuthenticated}>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path="/module"
            element={
              <ProtectedRoute isAuthenticated={state.isAuthenticated}>
                <Module />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blogs/:id"
            element={
              <ProtectedRoute isAuthenticated={state.isAuthenticated}>
                <BlogDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs/:id"
            element={
              <ProtectedRoute isAuthenticated={state.isAuthenticated}>
                <BlogDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coaching"
            element={
              <ProtectedRoute isAuthenticated={state.isAuthenticated}>
                <Coaching />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminHome />
              </AdminRoute>
            }
          />
          <Route
            path="/adminBlog"
            element={
              <AdminRoute>
                <AdminBlog />
              </AdminRoute>
            }
          />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
