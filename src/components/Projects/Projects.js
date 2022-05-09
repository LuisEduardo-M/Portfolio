import React from "react";
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.projects_container}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-1 d-flex justify-content-start">Meus Projetos</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <h1>project1</h1>
                    </div>

                    <div className="col-sm-6 col-md-4">

                        <h1>project2</h1>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <h1>project3</h1>

                    </div>

                    <div className="col-sm-6 col-md-4">
                        <h1>project4</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;