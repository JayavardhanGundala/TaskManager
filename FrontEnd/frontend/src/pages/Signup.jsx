import { useState } from 'react';
import API from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Member',
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

      await API.post(
        '/auth/signup',
        formData
      );

      alert('Signup Successful');

      navigate('/');

    } catch (error) {

      alert(
        error.response?.data?.message ||
        'Signup Failed'
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <h1>Signup</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

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

      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="Member">
          Member
        </option>

        <option value="Admin">
          Admin
        </option>
      </select>

      <button type="submit">
        Signup
      </button>

      <p>
        Already have an account?
        <Link to="/"> Login</Link>
      </p>

    </form>
  );
}

export default Signup;