import styled from "@emotion/styled";

import { BREAKPOINTS } from "../../utils/consts";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;

  > div {
    flex: 1;

    h1 {
      font-family: "Roboto";
      font-size: 42px;
      font-weight: 700;
      color: rgba(0, 75, 128, 1);
    }

    h3 {
      font-size: 26px;
      font-weight: 500;
      color: rgba(0, 75, 128, 1);
    }

    @keyframes pulse {
      0% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.04) rotate(0.5deg); }
      100% { transform: scale(1) rotate(0deg); }
    }

    button {
      background-color: rgba(0, 75, 128, 1);
      color: rgba(255, 255, 255, 1);
      border: none;
      border-radius: 12px;
      font-family: "Roboto";
      padding: 12px 16px;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
      animation: pulse 2s infinite;

      &:hover {
        animation: none;
        transform: scale(1.05) rotate(0.5deg);
      }
    }

    img {
      display: block;
      margin: 0 auto;
      height: 260px;
      width: 260px;
      border-radius: 100%;

      border: 2px solid #d1d5db; /* cinza claro */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      object-fit: cover;
    }
    
    @media (max-width: ${BREAKPOINTS.PHONE}px) {
      &:last-child {
        display: none;
      }
    }
  }
`;
