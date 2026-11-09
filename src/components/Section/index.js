import React from "react";
import styled from "@emotion/styled";

import { BREAKPOINTS } from "../../utils/consts";

const Wrapper = styled.section`
  padding: 104px 0;
  border-bottom: 1px solid var(--line);

  @media (max-width: ${BREAKPOINTS.PHONE}px) {
    padding: 72px 0;
  }

  .head {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 32px;
    align-items: end;
    margin-bottom: 48px;

    @media (max-width: ${BREAKPOINTS.PHONE_BIGGER}px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  .index {
    display: block;
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--accent);
    margin-bottom: 12px;
  }

  h2 {
    font-size: clamp(30px, 4vw, 40px);
    font-weight: 600;
  }

  .lead {
    color: var(--muted);
    font-size: 17px;
    max-width: 520px;
    justify-self: end;

    @media (max-width: ${BREAKPOINTS.PHONE_BIGGER}px) {
      justify-self: start;
    }
  }
`;

const Section = ({ id, index, title, lead, children }) => (
  <Wrapper id={id}>
    <div className="container">
      <div className="head" data-aos="fade-up">
        <div>
          <span className="index">{index}</span>
          <h2>{title}</h2>
        </div>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {children}
    </div>
  </Wrapper>
);

export default Section;
