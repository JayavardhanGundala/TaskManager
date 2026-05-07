import { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data } = await API.post(
        '/auth/login',
        formData
      );

      localStorage.setItem('token', data.token);

      localStorage.setItem(
        'user',
        JSON.stringify(data.user)
      );

      navigate('/dashboard');

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Login Failed'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <h1>Login</h1>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Login
      </button>

      <p>
        Don't have an account?
        <Link to="/signup"> Signup</Link>
      </p>

    </form>
  );
}

export default Login;