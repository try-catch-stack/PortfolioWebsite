import React from 'react';
import Image from 'next/image';

const ProjectCard = ({ img, description, sourceCode, link }) => {
    return (
        <div className="h-auto grid bg-white text-black rounded-xl shadow-xl">
            <div className="relative  rounded-t-xl">
                <img className="rounded-t-xl" src={img} alt="studentsAssemble" />
                <div className=" p-2 bottom-0 flex justify-center bg-navBg w-full text-white">
                    <a href={sourceCode} target="_blank">
                        <i className="fab fa-github hover:scale-105" style={{ margin: '10px 20px' }} />
                    </a>
                    <a href={link} target="_blank">
                        <i className="fas fa-link hover:scale-105" style={{ margin: '10px 20px' }} />
                    </a>
                </div>
            </div>
            <div className="p-4 ">{description}</div>
        </div>
    );
};

export default ProjectCard;
