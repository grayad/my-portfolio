import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  // initialize form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  //   useState for error messages
  const [errorMessage, setErrorMessage] = useState("");

  //   sync form data to the state of the component (any change in input can be captured in formState)
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
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

  // JSX
  return (
    <section class="d-flex justify-content-center">
      <div class="contact-container">
        <h2 class="text-center">Contact Me</h2>
        <form
          id="contact-form"
          action="https://formsubmit.co/865aa0e246c8905e33ecbfa8076f6e87"
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="NEW MESSAGE FROM PORTFOLIO"
          ></input>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              class="rounded border-0"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              class="rounded border-0"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              class="rounded border-0"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {/* conditional statement: if there is an error, display the message */}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" class="btn btn-light">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
