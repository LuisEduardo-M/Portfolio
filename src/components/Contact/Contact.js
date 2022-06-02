import React from "react";

import myData from "../../myData";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-1">Fale Comigo</h1>
          </div>

          <div>
            <p>{myData.contactText}</p>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center">
            <a
              className={styles.email_link}
              href="mailto:luiseduardomc019@gmail.com"
            >
              {myData.contactEmail}
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-evenly">
            <a
              rel="noreferrer"
              target={"_blank"}
              href="https://github.com/LuisEduardo-M"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
              />
            </a>

            <a
              rel="noreferrer"
              target={"_blank"}
              href="https://www.linkedin.com/in/luiseduardomedunacabreira/"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
