import sched from "../../images/digital-marketing-meeting.jpg"
import taco from "../../images/taco.jpg"
import free from "../../images/free.jpg"
import note from "../../images/notes.jpg"
import budget from "../../images/budget.jpg"
import tech from "../../images/tech.jpg"
import raffler from "../../images/raffler-logo.png"

function Portfolio() {
  return (
    <section className="container">
      <h2 className="section-title">Portfolio</h2>
      <div className="projects">
        <div className="card">
          <a href="https://vic-smith.github.io/daily-planner/">
            <div className="title">Day Scheduler</div>
            <img
              src={sched}
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
            <img src={taco} alt="Tacos" />
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
            <img src={free} alt="Free Stuff" />
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
            <img src={note} alt="Note Pad Icon" />
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
            <img src={budget} alt="Budget Tools" />
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
            <img src={tech} alt="Computer Chip" />
          </a>
          <div>
            <a href="https://github.com/vic-smith/tech-blog.git">Source Code</a>
          </div>
        </div>
      

      <div className="card">
          <a href="https://guarded-brushlands-70829.herokuapp.com/">
            <div className="title">The Raffler</div>
            <img src={raffler} alt="Raffler logo" />
          </a>
          <div>
            <a href="https://github.com/vic-smith/the-raffler">Source Code</a>
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
