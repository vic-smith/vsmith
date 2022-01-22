import Project from "../Project";
import projects from "../../projects.json";

function Portfolio() {
  return (
    <div>
      {projects.map((project) => (
        <Project img={project.img} title={project.title}/>
      ))}
    </div>
  );
}

export default Portfolio;
