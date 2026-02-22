import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const RegisterPage = () => {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate  = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerUser({ name, email, password });
      login(data);
      toast.success('Account created!');
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Register</h2>
        <input style={styles.input} type="text"     placeholder="Name"     value={name}     onChange={e => setName(e.target.value)}     required />
        <input style={styles.input} type="email"    placeholder="Email"    value={email}    onChange={e => setEmail(e.target.value)}    required />
        <input style={styles.input} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit" style={styles.btn}>Register</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

const styles = {
  container: { display:'flex', justifyContent:'center', alignItems:'center', height:'80vh' },
  form:      { display:'flex', flexDirection:'column', gap:'12px', width:'320px', padding:'32px', boxShadow:'0 2px 12px rgba(0,0,0,0.15)', borderRadius:'10px' },
  input:     { padding:'10px', borderRadius:'6px', border:'1px solid #ddd', fontSize:'15px' },
  btn:       { padding:'10px', background:'#1a1a2e', color:'#fff', border:'none', borderRadius:'6px', cursor:'pointer', fontSize:'16px' }
};

export default RegisterPage;