import { Link, useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <nav className="navbar">

      <h2>Task Manager</h2>

      <div className="nav-links">

        <Link to="/dashboard">Dashboard</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tasks">Tasks</Link>

        {user?.role === 'Admin' && (
          <Link to="/create-task">Create Task</Link>
        )}

        <button onClick={logout}>
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;