import React from 'react';
import ProjectCard from './projectCard';

const Projects = () => {
    return (
        <div>
            <div className="text-2xl lg:text-4xl flex justify-center mt-4 ">Projects</div>
            <div className="grid p-16 lg:px-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5].map((project, i) => (
                    <ProjectCard index={i} key={i} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
