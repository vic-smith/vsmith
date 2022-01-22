function About() {
  return (
    <section className=".container">
      <div id="about-me" className="about-me">
        <h2 className="section-title">About Me</h2>
      </div>
      <div className="victor">
        <div className="profile">
          <img
            src="./images/profile-pic.JPG"
            className="profile-pic"
            alt="Victor"
          />
        </div>
        <div className="text">
          <ul>
            <p>Hello!</p>

            <p>
              It's great to meet you. I am a developing developer making the
              switch from manufacturing and metal fabrication to the exciting
              and challenging technology field. Please explore this page to view
              some of my recent projects. Feel free to reach out if you would
              like to connect. Have a great day!
            </p>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
