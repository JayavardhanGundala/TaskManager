import { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';

function Tasks() {

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

  return (
    <>
      <Navbar />

      <div className="container">

        <h1>Tasks</h1>

        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
          />
        ))}

      </div>
    </>
  );
}

export default Tasks;