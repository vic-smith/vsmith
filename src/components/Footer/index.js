import linked from "../../images/LinkedIn.png"
import stack from "../../images/stackoverflow.png"
import git from "../../images/git.png"

function Footer() {
  return (
    <section>
      <div className="footer">
        <ul className="contact">
          <li>
            <a href="https://github.com/vic-smith">
              <img src={git} alt="GitHub Logo" />
            </a>
          </li>
          
          <li>
            <a href="https://stackoverflow.com/users/16684179/vsmith">
              <img src={stack} alt="Stackoverflow Logo" />
            </a>
          </li><li>
            <a href="https://www.linkedin.com/in/victor-smith-devel0per">
              <img src={linked} alt="LinkedIn Logo" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
