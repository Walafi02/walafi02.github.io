import styled from "@emotion/styled";

import { BREAKPOINTS } from "../../utils/consts";

export const Container = styled.section`
  padding: 104px 0;

  @media (max-width: ${BREAKPOINTS.PHONE}px) {
    padding: 72px 0;
  }

  .panel {
    position: relative;
    overflow: hidden;
    padding: 72px 56px;
    border-radius: 28px;
    background: var(--ink);
    color: var(--bg);

    @media (max-width: ${BREAKPOINTS.PHONE}px) {
      padding: 48px 24px;
      border-radius: 20px;
    }

    &::after {
      content: "";
      position: absolute;
      right: -120px;
      top: -120px;
      width: 360px;
      height: 360px;
      border-radius: 50%;
      background: radial-gradient(circle, var(--accent) 0%, transparent 70%);
      opacity: 0.35;
      pointer-events: none;
    }
  }

  .index {
    display: block;
    font-family: var(--font-mono);
    font-size: 13px;
    opacity: 0.6;
    margin-bottom: 16px;
  }

  h2 {
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 600;
    max-width: 640px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    opacity: 0.7;
    max-width: 520px;
    margin-bottom: 40px;
  }

  .actions {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  padding: 0 22px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid color-mix(in srgb, var(--bg) 22%, transparent);
  color: var(--bg);
  transition: background 0.15s ease, transform 0.15s ease;

  &:hover {
    background: color-mix(in srgb, var(--bg) 10%, transparent);
    transform: translateY(-1px);
  }

  &.primary {
    background: var(--bg);
    color: var(--ink);
    border-color: var(--bg);

    &:hover {
      opacity: 0.9;
    }
  }
`;
