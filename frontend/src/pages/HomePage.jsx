import { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch]     = useState('');
  const [loading, setLoading]   = useState(true);

  const fetchProducts = async (keyword = '') => {
    try {
      setLoading(true);
      const { data } = await getProducts(keyword);
      setProducts(data);
    } catch {
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProducts(search);
  };

  return (
    <div style={{ padding: '24px' }}>
      <h2>All Products</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: '24px', display:'flex', gap:'10px' }}>
        <input
          style={{ padding:'10px', borderRadius:'6px', border:'1px solid #ddd', width:'300px' }}
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit" style={{ padding:'10px 20px', background:'#1a1a2e', color:'#fff', border:'none', borderRadius:'6px', cursor:'pointer' }}>
          Search
        </button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={{ display:'flex', flexWrap:'wrap', gap:'24px' }}>
          {products.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      )}
    </div>
  );
};

export default HomePage;