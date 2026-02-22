import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { userInfo, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>🛒 ShopApp</Link>
      <div style={styles.links}>
        <Link to="/cart" style={styles.link}>
          Cart {cartItems.length > 0 && <span style={styles.badge}>{cartItems.length}</span>}
        </Link>
        {userInfo ? (
          <>
            <Link to="/orders" style={styles.link}>My Orders</Link>
            {userInfo.isAdmin && <Link to="/admin" style={styles.link}>Admin</Link>}
            <button onClick={handleLogout} style={styles.btn}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/register" style={styles.link}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav:    { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 24px', background:'#1a1a2e', color:'#fff' },
  brand:  { color:'#e94560', fontWeight:'bold', fontSize:'22px', textDecoration:'none' },
  links:  { display:'flex', alignItems:'center', gap:'16px' },
  link:   { color:'#fff', textDecoration:'none', fontSize:'15px' },
  btn:    { background:'#e94560', color:'#fff', border:'none', padding:'6px 14px', borderRadius:'6px', cursor:'pointer' },
  badge:  { background:'#e94560', borderRadius:'50%', padding:'2px 7px', fontSize:'12px', marginLeft:'4px' }
};

export default Navbar;