function ProjectCard({ project }) {

  return (
    <div className="card">

      <h2>{project.title}</h2>

      <p>{project.description}</p>

    </div>
  );
}

export default ProjectCard;