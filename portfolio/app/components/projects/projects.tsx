import Project from "./project";

const Projects = () => {
  const projects = [{}, {}, {}];
  return (
    <div>
      {projects.map((projects) => (
        <Project></Project>
      ))}
    </div>
  );
};

export default Projects;
