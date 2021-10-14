import React from 'react';
import ProjectCard from './projectCard';

const Projects = () => {
    // Website made to spread awareness about the benefits that students can avail using their university's email id.
    const projects = [
        {
            img: '/studentsAssemble.png',
            description:
                "Website made to spread awareness about the benefits that students can avail using their university's email id.",
            sourceCode: 'https://github.com/try-catch-stack/StudentsAssemble',
            link: 'https://students-assemble.tech/',
        },
        {
            img: '/tictactoe.png',
            description:
                'Classic Tic Tac Toe game with unbeatable single player mode with implementation of minimax algorithm.',
            sourceCode: 'https://github.com/try-catch-stack/Tic-Tac-Toe',
            link: 'https://try-catch-stack.github.io/Tic-Tac-Toe/',
        },
        {
            img: '/studentsAssemble.png',
            description: 'Description.',
            sourceCode: 'https://github.com/try-catch-stack/StudentsAssemble',
            link: 'https://students-assemble.tech/',
        },
    ];
    return (
        <div>
            <div className="text-2xl font-bold lg:text-4xl flex justify-center mt-4 ">Projects</div>
            <div className="grid px-16 py-8 lg:px-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                    <ProjectCard
                        img={project.img}
                        sourceCode={project.sourceCode}
                        link={project.link}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
