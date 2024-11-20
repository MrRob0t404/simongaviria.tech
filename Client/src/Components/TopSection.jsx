import selfImg from "../assets/self-img2.png";
import ReactIcon from "../assets/icons/React Icon.png";
// Styles - to review
import "../App.css";
import "./styles/top-section.css";

const TopSection = () => {
  return (
    <div id="top-section" className="section">
      <div id="info" className="cards">
        <div id="icon-container">
          <img src={ReactIcon} alt="React Icon" />
        </div>
        <div id="info-text">
          <h1>
            Software Engineer Redefining
            <span>User Interfaces</span> and <span>Apps</span> with AI Driven
            Design
          </h1>
        </div>
      </div>
      <div id="self-img">
        <div id="img-container">
          <img src={selfImg} alt="Self img" className="animate" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
