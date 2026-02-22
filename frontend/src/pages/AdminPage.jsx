import { useEffect, useState } from 'react';
import { getProducts, createProduct, deleteProduct, getAllOrders, updateOrderStatus } from '../services/api';
import { toast } from 'react-toastify';

const AdminPage = () => {
  const [products, setProducts]   = useState([]);
  const [orders, setOrders]       = useState([]);
  const [activeTab, setActiveTab] = useState('products');
  const [form, setForm] = useState({
    name: '', description: '', price: '', category: '', stock: '', image: ''
  });

  const fetchProducts = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  const fetchOrders = async () => {
    try {
      const { data } = await getAllOrders();
      setOrders(data);
    } catch {
      toast.error('Failed to load orders');
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createProduct(form);
      toast.success('Product created!');
      setForm({ name:'', description:'', price:'', category:'', stock:'', image:'' });
      fetchProducts();
    } catch {
      toast.error('Failed to create product');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      toast.success('Product deleted!');
      fetchProducts();
    } catch {
      toast.error('Failed to delete product');
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateOrderStatus(id, status);
      toast.success(`Order marked as ${status}!`);
      fetchOrders();
    } catch {
      toast.error('Failed to update order status');
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending:    '#f39c12',
      processing: '#3498db',
      shipped:    '#9b59b6',
      delivered:  '#2ecc71'
    };
    return colors[status] || '#888';
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>👑 Admin Panel</h2>

      {/* Tabs */}
      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab('products')}
          style={activeTab === 'products' ? styles.activeTab : styles.tab}
        >
          🛍 Products
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          style={activeTab === 'orders' ? styles.activeTab : styles.tab}
        >
          📦 Orders {orders.length > 0 && <span style={styles.badge}>{orders.length}</span>}
        </button>
      </div>

      {/* Products Tab */}
      {activeTab === 'products' && (
        <div>
          <form onSubmit={handleCreate} style={styles.form}>
            <h3>Add New Product</h3>
            {['name','description','price','category','stock','image'].map(field => (
              <input
                key={field}
                style={styles.input}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={form[field]}
                onChange={e => setForm({ ...form, [field]: e.target.value })}
                required={field !== 'image'}
              />
            ))}
            <button type="submit" style={styles.btn}>Add Product</button>
          </form>

          <h3>All Products ({products.length})</h3>
          {products.map(p => (
            <div key={p._id} style={styles.row}>
              <img src={p.image} alt={p.name} style={styles.productImg} />
              <div style={{ flex: 1 }}>
                <strong>{p.name}</strong>
                <p style={{ margin:'2px 0', color:'#888', fontSize:'13px' }}>{p.category}</p>
              </div>
              <span style={{ color:'#e94560', fontWeight:'bold' }}>${p.price}</span>
              <span style={styles.stockBadge}>Stock: {p.stock}</span>
              <button onClick={() => handleDelete(p._id)} style={styles.deleteBtn}>🗑 Delete</button>
            </div>
          ))}
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div>
          <h3>All Orders ({orders.length})</h3>
          {orders.length === 0 ? (
            <p>No orders yet.</p>
          ) : (
            orders.map(order => (
              <div key={order._id} style={styles.orderCard}>
                <div style={styles.orderHeader}>
                  <div>
                    <p style={{ margin:0, fontWeight:'bold' }}>Order ID: {order._id.slice(-8).toUpperCase()}</p>
                    <p style={{ margin:'4px 0', color:'#888', fontSize:'13px' }}>
                      👤 {order.user?.name} ({order.user?.email})
                    </p>
                    <p style={{ margin:'4px 0', fontSize:'13px' }}>
                      🛍 {order.items.map(i => `${i.name} x${i.qty}`).join(', ')}
                    </p>
                    <p style={{ margin:'4px 0', fontSize:'13px' }}>
                      📅 {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div style={{ textAlign:'right' }}>
                    <p style={{ fontWeight:'bold', color:'#e94560', fontSize:'18px' }}>
                      ${order.totalPrice.toFixed(2)}
                    </p>
                    <span style={{ ...styles.statusBadge, background: getStatusColor(order.status) }}>
                      {order.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Status Update Buttons */}
                <div style={styles.statusButtons}>
                  <span style={{ fontSize:'13px', fontWeight:'bold', marginRight:'8px' }}>Update Status:</span>
                  {['pending', 'processing', 'shipped', 'delivered'].map(status => (
                    <button
                      key={status}
                      onClick={() => handleStatusChange(order._id, status)}
                      disabled={order.status === status}
                      style={{
                        ...styles.statusBtn,
                        background: order.status === status ? getStatusColor(status) : '#f0f0f0',
                        color: order.status === status ? '#fff' : '#333',
                        cursor: order.status === status ? 'default' : 'pointer'
                      }}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  tabs:        { display:'flex', gap:'10px', marginBottom:'24px' },
  tab:         { padding:'10px 24px', background:'#f0f0f0', border:'none', borderRadius:'8px', cursor:'pointer', fontSize:'15px' },
  activeTab:   { padding:'10px 24px', background:'#1a1a2e', color:'#fff', border:'none', borderRadius:'8px', cursor:'pointer', fontSize:'15px' },
  badge:       { background:'#e94560', color:'#fff', borderRadius:'50%', padding:'2px 7px', fontSize:'12px', marginLeft:'6px' },
  form:        { display:'flex', flexDirection:'column', gap:'10px', maxWidth:'400px', marginBottom:'32px', padding:'20px', boxShadow:'0 2px 10px rgba(0,0,0,0.1)', borderRadius:'10px' },
  input:       { padding:'10px', borderRadius:'6px', border:'1px solid #ddd' },
  btn:         { padding:'10px', background:'#1a1a2e', color:'#fff', border:'none', borderRadius:'6px', cursor:'pointer' },
  row:         { display:'flex', alignItems:'center', gap:'12px', padding:'12px', borderBottom:'1px solid #eee' },
  productImg:  { width:'50px', height:'50px', objectFit:'cover', borderRadius:'6px' },
  stockBadge:  { background:'#f0f0f0', padding:'4px 10px', borderRadius:'12px', fontSize:'13px' },
  deleteBtn:   { background:'#e94560', color:'#fff', border:'none', padding:'6px 12px', borderRadius:'6px', cursor:'pointer' },
  orderCard:   { border:'1px solid #ddd', borderRadius:'10px', padding:'16px', marginBottom:'16px', boxShadow:'0 2px 6px rgba(0,0,0,0.06)' },
  orderHeader: { display:'flex', justifyContent:'space-between', marginBottom:'12px' },
  statusBadge: { color:'#fff', padding:'4px 12px', borderRadius:'12px', fontSize:'12px', fontWeight:'bold' },
  statusButtons:{ display:'flex', alignItems:'center', flexWrap:'wrap', gap:'8px', paddingTop:'12px', borderTop:'1px solid #eee' },
  statusBtn:   { padding:'6px 14px', border:'1px solid #ddd', borderRadius:'20px', fontSize:'13px' }
};

export default AdminPage;