import styles from "./contact.module.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { contactOption } from "../../const";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [warnings, setWarnings] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newWarnings = {
      name:
        formData.name.trim() === ""
          ? "Please enter your name."
          : formData.name.trim().length < 3
          ? "Name must be at least 3 characters."
          : "",
      email:
        formData.email.trim() === ""
          ? "Please enter your email."
          : /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
          ? ""
          : "Email is not valid.",
      message:
        formData.message.trim() === ""
          ? "Please enter a message."
          : formData.message.trim().length < 10
          ? "Message must be at least 10 characters."
          : "",
    };

    setWarnings(newWarnings);

    return !Object.values(newWarnings).some((warning) => warning !== "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove warning on input change
    setWarnings((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_API_KEY
      )
      .then(() => {
        form.current.reset();
        setFormData({ name: "", email: "", message: "" });
        setWarnings({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div
        className={`container ${styles.container} ${styles.contactContainer}`}
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

        {/* FORM */}
        <form ref={form}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Full Name"
              required
              className={`${styles.inputField} ${
                warnings.name ? styles.inputError : ""
              }`}
            />
            <small className={styles.warningText}>{warnings.name}</small>
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className={`${styles.inputField} ${
                warnings.email ? styles.inputError : ""
              }`}
            />
            <small className={styles.warningText}>{warnings.email}</small>
          </div>

          <div>
            <textarea
              name="message"
              rows="7"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
              className={`${styles.inputField} ${
                warnings.message ? styles.inputError : ""
              }`}
            />
            <small className={styles.warningText}>{warnings.message}</small>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
