import React from "react";
import styled from "@emotion/styled";

import { profile } from "../../utils/consts";

const Wrapper = styled.footer`
  border-top: 1px solid var(--line);
  padding: 28px 0;
  font-size: 14px;
  color: var(--muted);

  .inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
  }

  a:hover {
    color: var(--ink);
  }
`;

const Footer = () => (
  <Wrapper>
    <div className="container inner">
      <span>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </span>
      <a href="#top">Back to top ↑</a>
    </div>
  </Wrapper>
);

export default Footer;
