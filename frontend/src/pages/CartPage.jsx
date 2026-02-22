import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!userInfo) return navigate('/login');
    try {
      const items = cartItems.map(i => ({ product: i._id, name: i.name, price: i.price, qty: i.qty }));
      await createOrder({ items, totalPrice });
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/orders');
    } catch {
      toast.error('Failed to place order');
    }
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty.</p> : (
        <>
          {cartItems.map(item => (
            <div key={item._id} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.img} />
              <div>
                <p style={{ fontWeight:'bold' }}>{item.name}</p>
                <p>${item.price} x {item.qty}</p>
              </div>
              <button onClick={() => removeFromCart(item._id)} style={styles.removeBtn}>Remove</button>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={handleCheckout} style={styles.checkoutBtn}>Place Order</button>
        </>
      )}
    </div>
  );
};

const styles = {
  item:        { display:'flex', alignItems:'center', gap:'16px', padding:'12px', borderBottom:'1px solid #eee' },
  img:         { width:'70px', height:'70px', objectFit:'cover', borderRadius:'8px' },
  removeBtn:   { marginLeft:'auto', background:'#e94560', color:'#fff', border:'none', padding:'6px 12px', borderRadius:'6px', cursor:'pointer' },
  checkoutBtn: { marginTop:'16px', padding:'12px 32px', background:'#1a1a2e', color:'#fff', border:'none', borderRadius:'8px', cursor:'pointer', fontSize:'16px' }
};

export default CartPage;