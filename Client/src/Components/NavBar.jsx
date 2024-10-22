const NavBar = () => {
  return (
    <nav id="nav-bar" className="animate-intro cards">
      <h1>Simon Gaviria</h1>
      <nav id="nav-bar-items-container">
        <ul>
          <li>
            <a href="#popup2" className="button">
              Projects
            </a>
          </li>
          <li>
            <a href="#about-me-modal" className="button">
              About
            </a>
          </li>
          <li>
            <a href="#contact-me-form" className="button">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
