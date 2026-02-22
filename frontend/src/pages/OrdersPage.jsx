import { useEffect, useState } from 'react';
import { getMyOrders } from '../services/api';
import { toast } from 'react-toastify';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getMyOrders()
      .then(({ data }) => setOrders(data))
      .catch(() => toast.error('Failed to load orders'));
  }, []);

  return (
    <div style={{ padding: '24px' }}>
      <h2>My Orders</h2>
      {orders.length === 0 ? <p>No orders yet.</p> : orders.map(order => (
        <div key={order._id} style={styles.card}>
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Status:</strong> <span style={styles.status}>{order.status}</span></p>
          <p><strong>Total:</strong> ${order.totalPrice.toFixed(2)}</p>
          <p><strong>Items:</strong> {order.items.map(i => `${i.name} x${i.qty}`).join(', ')}</p>
          <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card:   { border:'1px solid #ddd', borderRadius:'10px', padding:'16px', marginBottom:'16px', boxShadow:'0 2px 6px rgba(0,0,0,0.08)' },
  status: { background:'#1a1a2e', color:'#fff', padding:'3px 10px', borderRadius:'12px', fontSize:'13px' }
};

export default OrdersPage;