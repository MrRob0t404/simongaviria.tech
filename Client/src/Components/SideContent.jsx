import "./styles/side-content.css";
import "../App.css";
import mountains_placeholder from "../assets/mountains-placeholder.webp";

const SideContent = () => {
  return (
    <div id="side-content">
      <div id="tech-stack" className="cards">
        <h1>Current Work</h1>
        <div id="temp">
          <img
            alt="project img"
            src={mountains_placeholder}
            className="animate"
          />
        </div>
        <hr className="divider" />
        <div>
          <h1>Title 1</h1>
        </div>
        <hr className="divider" />
        <div>
          <h1>Title 2</h1>
        </div>
        <hr className="divider" />
        <div>
          <h1>Title 3</h1>
        </div>
      </div>

      <div id="contact" className="cards">
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/simon-gaviria/"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/code_spagetti"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <span>Twitter</span>
          </a>
          <a
            href="https://github.com/MrRob0t404"
            className="contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideContent;
