import { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function CreateTask() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    project: '',
    dueDate: '',
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {

    try {

      const { data } = await API.get('/projects');

      setProjects(data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post('/tasks', formData);

      alert('Task Created');

      navigate('/tasks');

    } catch (error) {

      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <>
      <Navbar />

      <form onSubmit={handleSubmit}>

        <h1>Create Task</h1>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <select
          name="project"
          onChange={handleChange}
          required
        >

          <option value="">
            Select Project
          </option>

          {projects.map((project) => (
            <option
              key={project._id}
              value={project._id}
            >
              {project.title}
            </option>
          ))}

        </select>

        <input
          type="date"
          name="dueDate"
          onChange={handleChange}
        />

        <button type="submit">
          Create Task
        </button>

      </form>
    </>
  );
}

export default CreateTask;