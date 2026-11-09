import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { navLinks, profile, BREAKPOINTS } from "../../utils/consts";

const Bar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid ${(p) => (p.scrolled ? "var(--line)" : "transparent")};
  transition: border-color 0.2s ease;

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 16px;
    letter-spacing: -0.01em;
  }

  .mark {
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    border-radius: 9px;
    background: var(--ink);
    color: var(--bg);
    font-size: 13px;
    font-weight: 700;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 28px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul a {
    font-size: 14px;
    font-weight: 500;
    color: var(--muted);
    transition: color 0.15s ease;

    &:hover {
      color: var(--ink);
    }
  }

  .cta {
    font-size: 14px;
    font-weight: 600;
    padding: 9px 16px;
    border-radius: 999px;
    background: var(--ink);
    color: var(--bg);
    transition: opacity 0.15s ease;

    &:hover {
      opacity: 0.85;
    }
  }

  @media (max-width: ${BREAKPOINTS.PHONE}px) {
    ul li.link {
      display: none;
    }
    .brand .name {
      display: none;
    }
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Bar scrolled={scrolled} aria-label="Main">
      <div className="container inner">
        <a href="#top" className="brand">
          <span className="mark">WF</span>
          <span className="name">{profile.name}</span>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href} className="link">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a className="cta" href={`mailto:${profile.email}`}>
              Let's talk
            </a>
          </li>
        </ul>
      </div>
    </Bar>
  );
};

export default Navbar;
