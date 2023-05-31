import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const phoneNumber = "+17074188777";
  const email = "Kingsremodelingservice@gmail.com";

  return (
    <section>
      <p>
        We would love to hear from you. Contact our team today to discuss your
        construction or remodeling project.
      </p>
      <ContactForm />

      <div>
        <h3>Call Phone</h3>
        <a href={`tel:${phoneNumber}`}>Call</a>
        <p>{phoneNumber}</p>
        <h3>SMS Phone</h3>
        <a href={`sms:${phoneNumber}`}>SMS</a>
      </div>

      <div>
        <h3>Email</h3>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
          <p>{email}</p>
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
