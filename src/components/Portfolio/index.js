//import Project from "../Project";
//import projects from "../../projects.json";

function Portfolio() {
  return (
    <section className="container">
      <h2 className="section-title">Portfolio</h2>
      <div className="projects">
        <div className="card">
          <a href="https://vic-smith.github.io/daily-planner/">
            <div className="title">Day Scheduler</div>
            <img
              src="./images/digital-marketing-meeting.jpg"
              alt="People at work."
            />
          </a>
          <div>
            <a href="https://github.com/vic-smith/daily-planner.git">
              Source Code
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://vic-smith.github.io/Taco-Loca-tor/">
            <div className="title">TacoLocator</div>
            <img src="./images/taco.jpg" alt="Tacos" />
          </a>
          <div>
            <a href="https://github.com/vic-smith/Taco-Loca-tor.git">
              Source Code
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://safe-beyond-95818.herokuapp.com/">
            <div className="title">Give-Away</div>
            <img src="./images/free.jpg" alt="Free Stuff" />
          </a>
          <div>
            <a href="https://github.com/dylan-fair/give-away.git">
              Source Code
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://damp-journey-79660.herokuapp.com/">
            <div className="title">Note-Taker</div>
            <img src="./images/notes.jpg" alt="Note Pad Icon" />
          </a>
          <div>
            <a href="https://github.com/vic-smith/note-taker.git">
              Source Code
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://budget-tracker-vic.herokuapp.com/">
            <div className="title">Budget-Tracker</div>
            <img src="./images/budget.jpg" alt="Budget Tools" />
          </a>
          <div>
            <a href="https://github.com/vic-smith/budget-tracker.git">
              Source Code
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://techshare-vs.herokuapp.com/">
            <div className="title">Tech Blog</div>
            <img src="./images/tech.jpg" alt="Computer Chip" />
          </a>
          <div>
            <a href="https://github.com/vic-smith/tech-blog.git">Source Code</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

//{
/* {projects.map((project) => (
        <div>
        <Project  img={project.img} title={project.title} /> 
        <Project href={project.app}/>
        </div>
      ))} */
//}
