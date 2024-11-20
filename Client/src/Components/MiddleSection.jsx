import "./styles/middle-section.css";
import "../App.css";
import arrow_top_right from "../assets/icons/arrow_top_right.png";

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
              <img
                src={arrow_top_right}
                alt="Arrow_top_right_icon"
              />
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
