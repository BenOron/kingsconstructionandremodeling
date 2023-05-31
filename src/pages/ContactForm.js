import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mayzzgvq');

  if (state.succeeded) {
    return <p>Thanks for contacting us!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className={`form-control ${state.errors.email ? 'error' : ''}`}
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          className={`form-control ${state.errors.phone ? 'error' : ''}`}
        />
        <ValidationError
          prefix="Phone"
          field="phone"
          errors={state.errors}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className={`form-control ${state.errors.message ? 'error' : ''}`}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button type="submit" disabled={state.submitting} className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
