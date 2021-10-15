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
            img: '/portfolio.png',
            description: 'Personal portfolio website made using Next.js on top of React.js ,Tailwind CSS and Three.js',
            sourceCode: 'https://github.com/try-catch-stack/PortfolioWebsite',
            link: '/',
        },
    ];
    return (
        <div id="projects" className="bg-white dark:bg-primaryBg md:py-16">
            <div className="text-2xl font-bold lg:text-4xl flex justify-center p-4 text-headingTextDark dark:text-headingText">
                Projects
            </div>
            <div className="grid px-16 py-8 lg:px-40 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
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
