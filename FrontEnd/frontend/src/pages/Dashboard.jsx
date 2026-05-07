import { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {

    try {

      const { data } = await API.get('/tasks');

      setTasks(data);

    } catch (error) {
      console.log(error);
    }
  };

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed'
  );

  const pendingTasks = tasks.filter(
    (task) => task.status !== 'Completed'
  );

  return (
    <>
      <Navbar />

      <div className="container">

        <h1>Dashboard</h1>

        <div className="dashboard-grid">

          <div className="stat-card">
            <h2>{tasks.length}</h2>
            <p>Total Tasks</p>
          </div>

          <div className="stat-card">
            <h2>{completedTasks.length}</h2>
            <p>Completed</p>
          </div>

          <div className="stat-card">
            <h2>{pendingTasks.length}</h2>
            <p>Pending</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;