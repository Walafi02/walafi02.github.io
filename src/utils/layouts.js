import { css } from "@emotion/react";

import { BREAKPOINTS } from "./consts";
import "aos/dist/aos.css";

export const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap");

  :root {
    --bg: #fafaf8;
    --surface: #ffffff;
    --surface-muted: #f2f2ef;
    --ink: #0f1115;
    --ink-soft: #3d424b;
    --muted: #6b7079;
    --line: #e4e4df;
    --accent: #1f4fd8;
    --accent-ink: #ffffff;
    --accent-soft: rgba(31, 79, 216, 0.08);
    --success: #12a150;
    --shadow: 0 1px 2px rgba(15, 17, 21, 0.04),
      0 8px 24px rgba(15, 17, 21, 0.06);
    --radius: 14px;
    --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, sans-serif;
    --font-display: "Inter Tight", var(--font-sans);
    --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo,
      monospace;
    color-scheme: light;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #0b0d10;
      --surface: #12151a;
      --surface-muted: #181c22;
      --ink: #f2f3f5;
      --ink-soft: #c3c7cf;
      --muted: #8a909a;
      --line: #23272f;
      --accent: #6f93ff;
      --accent-ink: #0b0d10;
      --accent-soft: rgba(111, 147, 255, 0.12);
      --success: #3ddc84;
      --shadow: 0 1px 2px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.3);
      color-scheme: dark;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
  }

  body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: var(--accent);
    color: var(--accent-ink);
  }

  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 6px;
  }

  .container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 32px;

    @media (max-width: ${BREAKPOINTS.PHONE}px) {
      padding: 0 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;
