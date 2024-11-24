const Contact = () => {
  return (
    <div id="contact-me-form" className="overlay light">
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
    </div>
  );
};

export default Contact;
