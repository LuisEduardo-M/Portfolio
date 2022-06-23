import React from "react";
import Project from "./Project";

import myData from "./../../myData";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="display-1 d-flex justify-content-start">
              <strong className="fw-bold">Meus Projetos</strong>
            </h2>
          </div>
        </div>

        <Project projects={myData.projects} />

      </div>
    </div>
  );
};

export default Projects;
