import { css } from "@emotion/react";

import { BREAKPOINTS } from "./consts";
import 'aos/dist/aos.css';

export const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  body {
    background-color: rgba(245, 244, 243, 1);
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .content {
    max-width: 900px;
    margin: 0 auto;
    padding: 42px;

    @media (max-width: ${BREAKPOINTS.PHONE}px) {
      padding: 18px;
    }
  }
`;
