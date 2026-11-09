import styled from "@emotion/styled";

import { BREAKPOINTS } from "../../utils/consts";

export const Container = styled.header`
  padding: 96px 0 104px;
  border-bottom: 1px solid var(--line);

  @media (max-width: ${BREAKPOINTS.PHONE}px) {
    padding: 56px 0 64px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    align-items: center;
    gap: 64px;

    @media (max-width: ${BREAKPOINTS.TABLET_PORTRAIT}px) {
      grid-template-columns: 1fr;
      gap: 48px;
    }
  }

  .status {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px 6px 10px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--surface);
    font-size: 13px;
    font-weight: 500;
    color: var(--ink-soft);
    margin-bottom: 28px;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--success);
      box-shadow: 0 0 0 0 var(--success);
      animation: ping 2.4s ease-out infinite;
    }
  }

  @keyframes ping {
    0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--success) 50%, transparent); }
    80%, 100% { box-shadow: 0 0 0 8px transparent; }
  }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--accent);
    letter-spacing: 0.02em;
    margin-bottom: 14px;
  }

  h1 {
    font-size: clamp(40px, 6vw, 64px);
    font-weight: 700;
    margin-bottom: 24px;

    span {
      color: var(--muted);
    }
  }

  .summary {
    font-size: 18px;
    color: var(--ink-soft);
    max-width: 560px;
    margin-bottom: 36px;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 48px;
    padding: 0 22px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 600;
    transition: transform 0.15s ease, background 0.15s ease, opacity 0.15s ease;

    &:hover {
      transform: translateY(-1px);
    }
  }

  .btn-primary {
    background: var(--accent);
    color: var(--accent-ink);

    &:hover {
      opacity: 0.92;
    }
  }

  .btn-ghost {
    border: 1px solid var(--line);
    background: var(--surface);
    color: var(--ink);

    &:hover {
      background: var(--surface-muted);
    }
  }

  .socials {
    display: flex;
    gap: 4px;
    margin-left: 8px;

    a {
      display: grid;
      place-items: center;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      color: var(--muted);
      transition: color 0.15s ease, background 0.15s ease;

      &:hover {
        color: var(--ink);
        background: var(--surface-muted);
      }
    }
  }

  .clients {
    margin-top: 44px;
    padding-top: 24px;
    border-top: 1px solid var(--line);

    span {
      display: block;
      font-family: var(--font-mono);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
      margin-bottom: 12px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 28px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 600;
      color: var(--ink-soft);
      letter-spacing: -0.01em;
    }
  }

  .portrait {
    position: relative;
    justify-self: end;
    width: 100%;
    max-width: 360px;

    @media (max-width: ${BREAKPOINTS.TABLET_PORTRAIT}px) {
      justify-self: start;
      max-width: 280px;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 16px -16px -16px 16px;
      border: 1px solid var(--line);
      border-radius: 24px;
    }

    img {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
      object-fit: cover;
      border-radius: 24px;
      background: var(--surface-muted);
      box-shadow: var(--shadow);
    }

    .tag {
      position: absolute;
      left: -20px;
      bottom: 28px;
      display: flex;
      flex-direction: column;
      padding: 12px 16px;
      border-radius: 12px;
      background: var(--surface);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
      font-size: 13px;
      line-height: 1.4;

      strong {
        font-size: 14px;
      }
      span {
        color: var(--muted);
      }

      @media (max-width: ${BREAKPOINTS.PHONE}px) {
        left: 12px;
      }
    }
  }
`;
