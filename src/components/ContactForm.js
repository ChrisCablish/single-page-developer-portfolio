import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import { Container } from "react-bootstrap";
import art from "../assets/images/pattern-rings.svg";

function ContactForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new URLSearchParams(new FormData(form)),
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        // Form submission was successful
        setState({ name: "", email: "", message: "" });
        alert("Thank you for your message!");
      } else {
        // Form submission failed
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      // Handle the error here
      console.error("Error:", error);
      alert("Oops! There was an error submitting your form");
    }
  };

  return (
    <Container className={styles.container}>
      <section className={styles.contactSection}>
        <div className={styles.textSection}>
          <h1>[ Contact ]</h1>
          <p>
            I'd love to hear from you. Please fill out this form and I will get
            back to you as soon as possible.
          </p>
        </div>
        <form
          className={styles.form}
          id="contact-form"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/maygzbba"
          method="POST"
        >
          <input
            className={styles.field}
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />

          <div className={styles.fieldBorder}></div>
          <input
            className={styles.field}
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            className={styles.field}
            name="message"
            value={state.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <div className={styles.buttonContainer}>
            <button type="submit">Send</button>
          </div>
        </form>
        <div className={styles.art}>
          <img src={art} alt=""></img>
        </div>
      </section>
    </Container>
  );
}

export default ContactForm;
