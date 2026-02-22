import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.img} />
      <div style={styles.info}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.category}>{product.category}</p>
        <p style={styles.price}>${product.price}</p>
        <p style={styles.stock}>
          {product.stock > 0 ? `✅ In Stock (${product.stock})` : '❌ Out of Stock'}
        </p>
        <button
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
          style={product.stock > 0 ? styles.btn : styles.btnDisabled}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  card:        { border:'1px solid #ddd', borderRadius:'10px', overflow:'hidden', width:'260px', boxShadow:'0 2px 8px rgba(0,0,0,0.1)' },
  img:         { width:'100%', height:'180px', objectFit:'cover' },
  info:        { padding:'12px' },
  name:        { fontSize:'16px', fontWeight:'bold', margin:'0 0 4px' },
  category:    { color:'#888', fontSize:'13px', margin:'0 0 6px' },
  price:       { color:'#e94560', fontWeight:'bold', fontSize:'18px' },
  stock:       { fontSize:'13px', margin:'6px 0' },
  btn:         { width:'100%', padding:'8px', background:'#1a1a2e', color:'#fff', border:'none', borderRadius:'6px', cursor:'pointer' },
  btnDisabled: { width:'100%', padding:'8px', background:'#ccc', color:'#fff', border:'none', borderRadius:'6px' }
};

export default ProductCard;