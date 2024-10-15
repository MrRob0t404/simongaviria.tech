const NavBar = () => {
  return (
    <nav id="nav-bar" class="animate-intro cards">
      <h1>Simon Gaviria</h1>
      <nav id="nav-bar-items-container">
        <ul>
          <li>
            <a href="#popup2" class="button">
              Projects
            </a>
          </li>
          <li>
            <a href="#about-me-modal" class="button">
              About
            </a>
          </li>
          <li>
            <a href="#contact-me-form" class="button">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
