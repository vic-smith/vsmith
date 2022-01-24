function Resume() {
  return (
    <section className="container">
      <h2 className="section-title">Resume</h2>
      <div className="skills">
        <ul>
          <h3 className="list">Software Proficiencies</h3>
          <div className="indent">
          <li>HTML & CSS</li>
          <li>React</li>
          <li>SQl</li>
          <li>Node</li>
          <li>JavaScript</li>
          <li>MongoDB</li>
          <li>RESTful API</li>
          <li>Express</li>
          <li>Git</li>
          </div>
        </ul>
      </div>
    <a className="skills" href="https://docs.google.com/document/d/1Nl3HxVLpAR-qhFB9gZOi0GxivIO9mam6lro1ew9TlH0/export?format=pdf">
    <button className="resume">Download Resume</button>
    </a>  
    </section>
  );
}

export default Resume;
