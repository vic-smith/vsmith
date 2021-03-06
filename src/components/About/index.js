import me from "../../images/profile-pic.jpg"

function About() {
  return (
    <section className="container">
      <div id="about-me" className="about-me">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="victor">
        <div className="profile">
          <img
            src={me}
            className="profile-pic"
            alt="Victor"
          />
        </div>
        <div className="text">
          <ul>
            <p>Hello!</p>

            <p>
              It's great to meet you. I am a software developer in Appleton Wisconsin. Please, take a look around to view
              some of my recent projects, proficiencies, and resume. Feel free to reach out if you would
              like to connect. Have a great day!
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
