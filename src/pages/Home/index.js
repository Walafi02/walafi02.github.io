import React, { useRef } from "react";

import { Card, Contact, Header } from "../../components";
import { projects, skills } from "../../utils/consts";

const Home = () => {
  const projectsRef = useRef(null)

  return (
    <div>
      <Header projectsRef={projectsRef} />
      <Card title='Skills' data={skills} />
      <Card parentRef={projectsRef} title='Projects' data={projects} />
      <Contact />
    </div>
  );
};

export default Home;
