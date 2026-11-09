import React from "react";
import styled from "@emotion/styled";

import Section from "../Section";
import { skills, BREAKPOINTS } from "../../utils/consts";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${BREAKPOINTS.TABLET_PORTRAIT}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${BREAKPOINTS.PHONE}px) {
    grid-template-columns: 1fr;
  }

  article {
    padding: 28px 24px;
    border: 1px solid var(--line);
    border-radius: var(--radius);
    background: var(--surface);
    transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
      box-shadow: var(--shadow);
      transform: translateY(-2px);
    }
  }

  .logo {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--surface-muted);
    margin-bottom: 24px;

    font-family: var(--font-mono);
    font-size: 14px;
    font-weight: 500;
    color: var(--ink);

    img {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: var(--muted);
    line-height: 1.55;
  }
`;

const Expertise = () => (
  <Section
    id="expertise"
    index="01 — Expertise"
    title="Core stack"
    lead="The technologies I rely on to take products from idea to production, across mobile, web and backend."
  >
    <Grid>
      {skills.map((skill, i) => (
        <article key={skill.title} data-aos="fade-up" data-aos-delay={i * 60}>
          <div className="logo">
            {skill.image ? <img src={skill.image} alt="" /> : skill.monogram}
          </div>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </article>
      ))}
    </Grid>
  </Section>
);

export default Expertise;
