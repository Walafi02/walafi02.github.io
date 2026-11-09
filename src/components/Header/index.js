import React from "react";

import { Container } from "./styles";
import { profile } from "../../utils/consts";
import { ArrowDown, GitHub, LinkedIn, Mail } from "../Icons";

import profileImage from "../../assets/perfil.png";

const Header = () => {
  return (
    <Container id="top">
      <div className="container grid">
        <div data-aos="fade-up">
          <div className="status">
            <span className="dot" />
            Open to new opportunities · {profile.location}
          </div>
          <p className="eyebrow">{profile.role}</p>
          <h1>
            Hi, I'm Walafi. <span>{profile.headline}</span>
          </h1>
          <p className="summary">{profile.summary}</p>

          <div className="actions">
            <a className="btn btn-primary" href="#projects">
              View my work <ArrowDown />
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <div className="socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedIn />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHub />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="E-mail">
                <Mail />
              </a>
            </div>
          </div>

          <div className="clients">
            <span>Apps built for</span>
            <ul>
              {profile.clients.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="portrait" data-aos="fade-up" data-aos-delay="100">
          <img src={profileImage} alt={`Portrait of ${profile.name}`} />
          <div className="tag">
            <strong>{profile.name}</strong>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
