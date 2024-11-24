import "./styles/nav-bar.css";
import "../App.css";

import BasicModal from "./Modal";

import Contact from "./Modal-Content/Contact";
import About from "./Modal-Content/About";
import Projects from "./Modal-Content/Projects";

const NavBar = () => {
  return (
    <nav id="nav-bar" className="cards">
      <h1>Simon Gaviria</h1>
      <nav id="nav-bar-items-container">
        <ul>
          <li>
            <a href="#popup2" className="button">
              <BasicModal label="Projects" content={<Projects />} />
            </a>
          </li>
          <li>
            <a href="#about-me-modal" className="button">
              <BasicModal label="About" content={<About />} />
            </a>
          </li>
          <li>
            <a href="#contact-me-form" className="button">
              <BasicModal label="Contact" content={<Contact />} />
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
