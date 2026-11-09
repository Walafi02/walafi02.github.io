import React from "react";
import { Global } from "@emotion/react";
import AOS from "aos";

import { GlobalStyles } from "./utils/layouts";
import { Home } from "./pages";

AOS.init({
  duration: 600,
  easing: "ease-out-cubic",
  once: true,
  offset: 40,
});

const App = () => (
  <>
    <Global styles={GlobalStyles} />
    <Home />
  </>
);

export default App;
