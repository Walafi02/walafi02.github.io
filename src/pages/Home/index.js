import React from "react";

import {
  Contact,
  Expertise,
  Footer,
  Header,
  Navbar,
  Projects,
} from "../../components";

const Home = () => (
  <>
    <Navbar />
    <main>
      <Header />
      <Expertise />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
