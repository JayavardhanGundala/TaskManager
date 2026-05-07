import { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

function Projects() {

  const [projects, setProjects] = useState([]);

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

  return (
    <>
      <Navbar />

      <div className="container">

        <h1>Projects</h1>

        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}

      </div>
    </>
  );
}

export default Projects;