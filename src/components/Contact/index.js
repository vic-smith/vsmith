import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="container">
      <div>
      <h1 className="section-title" >Contact me</h1>
      </div>
      <form className="contact-me" onSubmit={handleSubmit}>
        <div>
          <label className="field" htmlFor="name">Name:</label>
        </div>
        <input
          type="text"
          defaultValue={name}
          onBlur={handleChange}
          name="name"
        />

        <div>
          <label className="field" htmlFor="email">Email address:</label>
        </div>
        <input
          type="email"
          defaultValue={email}
          onBlur={handleChange}
          name="email"
        />

        <div>
          <label className="field" htmlFor="message">Message:</label>
        </div>
        <textarea
          name="message"
          defaultValue={message}
          onBlur={handleChange}
          rows="5"
        />

        {errorMessage && (
          <div>
            <p className="error">{errorMessage}</p>
          </div>
        )}
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
