import React from "react";
import styled from "@emotion/styled";

import Section from "../Section";
import { ArrowUpRight } from "../Icons";
import { projects, BREAKPOINTS } from "../../utils/consts";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: ${BREAKPOINTS.PHONE_BIGGER}px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
  overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

  .media {
    position: relative;
    display: grid;
    place-items: center;
    aspect-ratio: 16 / 9;
    background:
      radial-gradient(circle at 50% 40%, var(--surface) 0%, transparent 70%),
      var(--surface-muted);
    border-bottom: 1px solid var(--line);

    img {
      width: 30%;
      max-width: 140px;
      aspect-ratio: 1;
      object-fit: contain;
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.12));
      transition: transform 0.3s ease;
    }

    .monogram {
      display: grid;
      place-items: center;
      width: 30%;
      max-width: 140px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: var(--surface);
      border: 1px solid var(--line);
      font-size: clamp(32px, 6vw, 56px);
      font-weight: 700;
      color: var(--ink-soft);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
      transition: transform 0.3s ease;
    }

    .category {
      position: absolute;
      top: 16px;
      left: 16px;
      padding: 4px 10px;
      border-radius: 999px;
      background: var(--surface);
      border: 1px solid var(--line);
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--ink-soft);
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 24px;
  }

  .title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 8px;

    h3 {
      font-size: 20px;
      font-weight: 600;
    }

    svg {
      flex-shrink: 0;
      margin-top: 3px;
      color: var(--muted);
      transition: color 0.2s ease, transform 0.2s ease;
    }
  }

  p {
    color: var(--muted);
    font-size: 15px;
    margin-bottom: 20px;
    flex: 1;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: 3px 9px;
      border-radius: 6px;
      background: var(--surface-muted);
      font-size: 12px;
      font-weight: 500;
      color: var(--ink-soft);
    }
  }

  .link {
    font-size: 14px;
    font-weight: 600;
    color: var(--accent);
  }

  &:hover {
    border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
    box-shadow: var(--shadow);
    transform: translateY(-3px);

    .media img,
    .media .monogram {
      transform: scale(1.06);
    }
    .title svg {
      color: var(--accent);
      transform: translate(2px, -2px);
    }
  }
`;

const Projects = () => (
  <Section
    id="projects"
    index="02 — Selected work"
    title="Featured projects"
    lead="A selection of products I've built and led for football clubs in Brazil and the US, and for growing businesses."
  >
    <Grid>
      {projects.map((project, i) => (
        <Card
          key={project.projectName}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          data-aos-delay={(i % 2) * 80}
        >
          <div className="media">
            <span className="category">{project.category}</span>
            {project.image ? (
              <img src={project.image} alt="" />
            ) : (
              <span className="monogram" aria-hidden="true">
                {project.monogram}
              </span>
            )}
          </div>
          <div className="body">
            <div className="title">
              <h3>{project.projectName}</h3>
              <ArrowUpRight />
            </div>
            <p>{project.projectDescription}</p>
            <div className="footer">
              <ul aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <span className="link">{project.linkLabel}</span>
            </div>
          </div>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Projects;
