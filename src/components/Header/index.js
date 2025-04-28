import React from "react";

import { Container } from "./styles";

import profileImage from "../../assets/perfil.png";

const Header = ({ projectsRef }) => {
  const handleGoToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container>
      <div>
        <h1>Hi, i`m Walafi</h1>
        <h3>
          Softwere develop Senior, with expertise in React, React Native and
          Node.js
        </h3>
        <button type="button" onClick={handleGoToProjects}>
          View My Projects
        </button>
      </div>
      <div>
        <img src={profileImage} />
      </div>
    </Container>
  );
};

export default Header;
