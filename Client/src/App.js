import "./App.css";
import NavBar from "./Components/NavBar";
import MiddleSection from "./Components/MiddleSection";

function App() {
  return (
    <div id="main" class="fullscreen-element">
      <NavBar />
      <MiddleSection />

      <div id="popup2" class="overlay light">
        <a class="cancel" href="#"></a>
        <div class="popup">
          <h2>Projects</h2>
          <div class="content">
            <p>Click outside the popup to close.</p>
          </div>
        </div>
      </div>

      {/* <div id="about-me-modal" class="overlay light">
        <a class="cancel" href="#"></a>
        <div class="popup">
          <div class="popup-content">
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
                width="100%"
                height="600"
                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1847753778%3Fsecret_token%3Ds-dNQYikDWEvm&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
              <div>
                <a
                  href="https://soundcloud.com/puro-mix"
                  title="PURO"
                  target="_blank"
                  style="color: #cccccc; text-decoration: none"
                >
                  PURO
                </a>
                ·
                <a
                  href="https://soundcloud.com/puro-mix/a-lil-somthin-somethin/s-dNQYikDWEvm"
                  title="A lil somthin somethin"
                  target="_blank"
                  style="color: #cccccc; text-decoration: none"
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

      {/* <div id="contact-me-form" class="overlay light">
        <a class="cancel" href="#"></a>
        <div class="popup">
          <h2>Let's Connect!</h2>
          <div class="formbold-main-wrapper">
            <div class="formbold-form-wrapper">
              <form id="contact-form" method="POST">
                <div class="formbold-input-flex">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Jane Doe"
                      class="formbold-form-input"
                    />
                    <label for="name" class="formbold-form-label">
                      Full Name
                    </label>
                  </div>
                </div>

                <div class="formbold-input-flex">
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="jhon@mail.com"
                      class="formbold-form-input"
                    />
                    <label for="email" class="formbold-form-label">
                      Email
                    </label>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="(319) 555-0115"
                      class="formbold-form-input"
                    />
                    <label for="phone" class="formbold-form-label">
                      Phone
                    </label>
                  </div>
                </div>

                <div class="formbold-textarea">
                  <textarea
                    rows="6"
                    name="message"
                    id="message"
                    placeholder="Give me a brief description of your idea!"
                    class="formbold-form-input"
                  ></textarea>
                  <label for="message" class="formbold-form-label">
                    Message
                  </label>
                </div>
                <button class="formbold-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
