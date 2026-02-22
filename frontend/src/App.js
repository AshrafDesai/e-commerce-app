import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

import Navbar        from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import HomePage    from './pages/HomePage';
import LoginPage   from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage    from './pages/CartPage';
import OrdersPage  from './pages/OrdersPage';
import AdminPage   from './pages/AdminPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/login"    element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart"     element={<CartPage />} />
            <Route path="/orders"   element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
            <Route path="/admin"    element={<ProtectedRoute adminOnly={true}><AdminPage /></ProtectedRoute>} />
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;