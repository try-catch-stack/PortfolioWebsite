import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ index }) => {
    return (
        <div className="h-80 grid bg-white text-black rounded-xl shadow-xl">
            <div className="relative  rounded-t-xl">
                <img className="rounded-t-xl" src="/studentsAssemble.png" alt="studentsAssemble" />
                <div className="absolute  p-2 bottom-0 flex justify-center bg-navBg w-full text-white">
                    <a href="https://github.com/try-catch-stack/StudentsAssemble" target="_blank">
                        <i className="fab fa-github hover:scale-105" style={{ margin: '10px 20px' }} />
                    </a>
                    <a href="https://students-assemble.tech/" target="_blank">
                        <i className="fas fa-link hover:scale-105" style={{ margin: '10px 20px' }} />
                    </a>
                </div>
            </div>
            <div className="p-4 ">
                Website made to spread awareness about the benefits that students can avail using their university's
                email id.
            </div>
        </div>
    );
};

export default ProjectCard;
