import "./App.css";

import NavBar from "./Components/NavBar";
import TopSection from "./Components/TopSection";
import MiddleSection from "./Components/MiddleSection";
import SideContent from "./Components/SideContent";

function App() {
  return (
    <div id="main">
      <div id="content-wrapper">
        <NavBar />
        <div id="main-content">
          <div id="main-content-container">
            <TopSection />
            <MiddleSection />
          </div>
          <div id="side-content-container">
            <SideContent />
          </div>
          {/* <div id="popup2" className="overlay light">
        <a className="cancel" href="#"></a>
        <div className="popup">
          <h2>Projects</h2>
          <div className="content">
            <p>Click outside the popup to close.</p>
          </div>
        </div>
      </div> */}

          {/* <div id="about-me-modal" className="overlay light">
        <a className="cancel" href="#close">
          <span className="sr-only">Close</span>
        </a>
        <div className="popup">
          <div className="popup-content">
            <div id="about-me-modal-text-container">
              <h2>About me</h2>
              <p>
                Hello! I’m a skilled full-stack engineer based in the vibrant
                city of New York. With a strong focus on developing seamless web
                and mobile applications, I specialize in using technologies like
                React, React Native, and Node.js to create high-performance,
                user-centered solutions. My passion lies in combining my
                frontend and backend expertise to build applications that not
                only meet functional requirements but also provide an intuitive
                user experience. I thrive on the challenge of transforming ideas
                into reality, whether it's through innovative designs or
                efficient coding practices. When I’m not immersed in code, you
                can find me DJing at local events, curating playlists that
                resonate with the crowd. I also enjoy exploring my artistic side
                by creating visual art using code, blending technology and
                creativity in unique ways. I believe that the best solutions
                arise from a balance of technical skill and artistic vision.
                Let’s connect and collaborate on your next project!
              </p>
              <iframe
                title="soundcloud-mix"
                style={{
                  width: "100%",
                  height: "600",
                  scrolling: "no",
                  frameborder: "no",
                  allow: "autoplay",
                  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1847753778%3Fsecret_token%3Ds-dNQYikDWEvm&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
                }}
              ></iframe>
              <div>
                <a
                  href="https://soundcloud.com/puro-mix"
                  title="PURO"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  PURO
                </a>
                ·
                <a
                  href="https://soundcloud.com/puro-mix/a-lil-somthin-somethin/s-dNQYikDWEvm"
                  title="A lil somthin somethin"
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{ color: "#cccccc", textDecoration: "none" }}
                >
                  A lil somthin somethin
                </a>
              </div>
            </div>
            <div id="about-modal-img-container">
              <img src="./assets/DJ.JPG" alt="DJ" />
            </div>
          </div>
        </div>
      </div> */}

          {/* <div id="contact-me-form" className="overlay light">
        <a className="cancel" href="#"></a>
        <div className="popup">
          <h2>Let's Connect!</h2>
          <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
              <form id="contact-form" method="POST">
                <div className="formbold-input-flex">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Jane Doe"
                      className="formbold-form-input"
                    />
                    <label for="name" className="formbold-form-label">
                      Full Name
                    </label>
                  </div>
                </div>

                <div className="formbold-input-flex">
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="jhon@mail.com"
                      className="formbold-form-input"
                    />
                    <label for="email" className="formbold-form-label">
                      Email
                    </label>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="(319) 555-0115"
                      className="formbold-form-input"
                    />
                    <label for="phone" className="formbold-form-label">
                      Phone
                    </label>
                  </div>
                </div>

                <div className="formbold-textarea">
                  <textarea
                    rows="6"
                    name="message"
                    id="message"
                    placeholder="Give me a brief description of your idea!"
                    className="formbold-form-input"
                  ></textarea>
                  <label for="message" className="formbold-form-label">
                    Message
                  </label>
                </div>
                <button className="formbold-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
