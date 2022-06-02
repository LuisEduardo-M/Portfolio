import React from "react";
import Header from "../Header/Header";

import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div>
      <Header />
      <div className={styles.resume_container}>
        <div className="container">
          <div className="row">
            <div className="col">
              <object
                width="100%"
                height="1100"
                type="application/pdf"
                data="assets/Curriculo_LuisEduardoMeduna.pdf"
              >
                <p>PDF cannot be displayed.</p>
              </object>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
