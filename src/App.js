import React from "react";
import { Global } from "@emotion/react";

import { GlobalStyles } from "./utils/layouts";
import { Home } from "./pages";

import AOS from "aos";
AOS.init({
  duration: 500,
});

const App = () => {
  return (
    <div className="content">
      <Global styles={GlobalStyles} />
      <Home />
    </div>
  );
};

export default App;
