import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  const contactScroll = () => {
    window.scrollTo(0, 1919);
  }

  return (
    <div className={styles.header_container}>
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col-6 ">
            <h1>
              <a href="/">Luis Eduardo M.</a>
            </h1>
          </div>

          <div className="col-6">
            <nav>
              <ul>
                <li>
                  <a href="/curriculo">currículo</a>
                </li>
                <li>
                  <button onClick={contactScroll}>contato</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
