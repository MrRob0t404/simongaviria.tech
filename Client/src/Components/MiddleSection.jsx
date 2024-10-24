const MiddleSection = () => {
  return (
    <div id="middle-section" className="section">
      <div id="about-me" className="cards">
        <p>
          A skilled full-stack engineer based in NYC, known for developing
          seamless web and mobile applications using React, React Native, and
          Node.js. Combining frontend and backend expertise to deliver
          high-performance, user-centered solutions across platforms. When he's
          not coding, he enjoys DJing and creating art using code.
        </p>
      </div>
      <div id="contact-me" className="cards">
        <a href="#contact-me-form" className="button">
          <div id="contact-me-container">
            <p>Have some questions?</p>
            <div id="arrow-icon-container">
              <img src="./assets/icons/Arrow top right.png" alt="React Icon" />
            </div>
          </div>

          <div id="contact-me-title">
            <h1>Contact Me</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MiddleSection;
