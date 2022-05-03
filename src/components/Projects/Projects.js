import React from "react";
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.projects_container}>
            <div className="container">
                <div className={styles.projects_grid}>

                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <p>project1</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <p>project1</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 col">
                            <p>project3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;