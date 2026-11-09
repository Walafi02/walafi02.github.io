import React from "react";

import { ContactItem, Container } from "./styles";
import { profile } from "../../utils/consts";
import { GitHub, LinkedIn, Mail } from "../Icons";

const Contact = () => (
  <Container id="contact">
    <div className="container">
      <div className="panel" data-aos="fade-up">
        <span className="index">03 — Contact</span>
        <h2>Have a project in mind? Let's build it together.</h2>
        <p>
          I'm currently open to new opportunities and collaborations. Reach out
          and I'll get back to you shortly.
        </p>
        <div className="actions">
          <ContactItem className="primary" href={`mailto:${profile.email}`}>
            <Mail /> {profile.email}
          </ContactItem>
          <ContactItem href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedIn /> LinkedIn
          </ContactItem>
          <ContactItem href={profile.github} target="_blank" rel="noreferrer">
            <GitHub /> GitHub
          </ContactItem>
        </div>
      </div>
    </div>
  </Container>
);

export default Contact;
