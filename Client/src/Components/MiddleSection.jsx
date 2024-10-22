const MiddleSection = () => {
  return (
    <div id="content-wrapper">
      <div id="main-content">
        <div id="top-section" class="section">
          <div id="info-about-me-wrapper">
            <div id="info" class="cards">
              <div id="icon-container">
                <img src="./assets/icons/React Icon.png" alt="React Icon" />
              </div>
              <div id="info-text">
                <h1>
                  Software Engineer Redefining
                  <span>User Interfaces</span> and <span>Apps</span> with AI
                  Driven Design
                </h1>
              </div>
            </div>
          </div>
          <div id="self-img">
            <div id="img-container">
              <img
                src="./assets/self-img2.png"
                alt="Self_img"
                class="animate"
              />
            </div>
          </div>
        </div>
        <div id="middle-section" class="section">
          <div id="about-me" class="cards">
            <p>
              A skilled full-stack engineer based in NYC, known for developing
              seamless web and mobile applications using React, React Native,
              and Node.js. Combining frontend and backend expertise to deliver
              high-performance, user-centered solutions across platforms. When
              he's not coding, he enjoys DJing and creating art using code.
            </p>
          </div>
          <div id="contact-me" class="cards">
            <a href="#contact-me-form" class="button">
              <div id="contact-me-container">
                <p>Have some questions?</p>
                <div id="arrow-icon-container">
                  <img
                    src="./assets/icons/Arrow top right.png"
                    alt="React Icon"
                  />
                </div>
              </div>

              <div id="contact-me-title">
                <h1>Contact Me</h1>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="side-content">
        <div id="tech-stack" class="cards">
          <h1>Current Work</h1>
          <div id="temp">
            <img
              src="./assets/mountains-placeholder.webp"
              alt="Your image"
              class="animate"
            />
          </div>
          <hr class="divider" />
          <div>
            <h1>Title 1</h1>
          </div>
          <hr class="divider" />
          <div>
            <h1>Title 2</h1>
          </div>
          <hr class="divider" />
          <div>
            <h1>Title 3</h1>
          </div>
        </div>

        <div id="contact" class="cards">
          <div class="contact">
            <a
              href="https://www.linkedin.com/in/simon-gaviria/"
              class="contact-link"
              target="_blank"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/code_spagetti"
              class="contact-link"
              target="_blank"
            >
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/MrRob0t404"
              class="contact-link"
              target="_blank"
            >
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
