import styles from "./contact.module.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { contactOption } from "../../const";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_KEY,
      process.env.REACT_APP_TEMPLATE_KEY,
      form.current,
      process.env.REACT_APP_PUBLIC_API_KEY
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div
        className={` container ${styles.container} ${styles.contactContainer}`}
      >
        <div className={styles.contactOptions}>
          {contactOption.map(({ id, logo, option, info, address }) => (
            <article className={styles.contactOption} key={id}>
              <div className={styles.contactOptionIcon}>{logo}</div>
              <h4>{option}</h4>
              <h5>{info}</h5>
              <a href={address} target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          ))}
        </div>
        {/* END OF OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
