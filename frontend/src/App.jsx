import { Navigate, Route, Routes } from 'react-router';
import { useAuth } from './context/AuthContext.jsx';
import LandingNewUser from './pages/LandingNewUser.jsx';
import Login from './pages/Login.jsx';
import Registration from './pages/Registration.jsx';
import Home from './pages/Home.jsx';
import NewNote from './pages/NewNote.jsx';
import EditNote from './pages/EditNote.jsx';
import SearchResults from './pages/SearchResults.jsx';
import Settings from './pages/Settings.jsx';

function ProtectedRoute({ children }) {
  const { loggedIn } = useAuth();
  return loggedIn ? children : <Navigate to="/welcome" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/welcome"  element={<LandingNewUser />} />
      <Route path="/login"    element={<Login />} />
      <Route path="/register" element={<Registration />} />

      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/new" element={<ProtectedRoute><NewNote /></ProtectedRoute>} />
      <Route path="/notes/:id" element={<ProtectedRoute><EditNote /></ProtectedRoute>} />
      <Route path="/search" element={<ProtectedRoute><SearchResults /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
