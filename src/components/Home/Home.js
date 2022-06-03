import React from "react";

import myData from "../../myData";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className="container">
        <div className="row d-flex justify-content-lg-between justify-content-md-center">
          <div className="col-md-6">
            <h1 className="display-4">
              Prazer, sou
              <br />
              <span>{myData.homeName}</span>
            </h1>
            <br />

            <p>{myData.homeText}</p>
          </div>

          <div className="col-md-auto d-flex justify-content-center">
            <div className={styles.image_container}>
              <figure><img src="./profile.jpg" alt="Profile" /></figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
