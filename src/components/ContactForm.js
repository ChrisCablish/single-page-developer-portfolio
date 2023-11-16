// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import styles from "./ContactForm.module.scss";
// function ContactForm() {
//   const [state, handleSubmit] = useForm("maygzbba");
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit} className={styles.form}>
//       <label htmlFor="email">Email Address</label>
//       <input id="email" type="email" name="email" />
//       <ValidationError prefix="Email" field="email" errors={state.errors} />
//       <textarea id="message" name="message" />
//       <ValidationError prefix="Message" field="message" errors={state.errors} />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

import React, { useState } from "react";

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
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/maygzbba"
      method="POST"
    >
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <textarea
        name="message"
        value={state.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
