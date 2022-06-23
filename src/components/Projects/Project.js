import React from 'react';

const Project = ({ projects }) => {
    return (
        <div className='row'>
            {projects.map(project => (
                <div key={project.id} className="col-sm-6 col-md-4">
                    <div>
                        <h1 className='display-5 text-center'>{project.title}</h1>
                    </div>
                    <p>
                        {project.short}
                    </p>
                    <div>
                        <strong>Techs used:</strong>
                        <p>{project.techs}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Project;