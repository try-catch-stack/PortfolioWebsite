import React from 'react';

const Skills = () => {
    return (
        <div className="grid grid-rows-2 w-full pb-12  grid-flow-col lg:gap-4 bg-skillsBgLight dark:bg-skillsBg">
            <div className="place-self-center lg:p-4 font-bold lg:hidden text-2xl lg:text-4xl mt-4">Skill set</div>
            <div className="place-self-center p-4 hidden  font-bold lg:block text-4xl mt-8">
                Languages and Technologies I have used
            </div>
            <div className="flex flex-wrap w-full justify-center skills-section">
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-javascript-plain colored texts skills-icon p-4"></i>
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-python-plain colored skills-icon p-4"></i>
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-react-original colored skills-icon p-4"></i>
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-nodejs-plain-wordmark colored skills-icon p-4"></i>
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-cplusplus-plain-wordmark skills-icon p-4"></i>
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-django-line-wordmark skills-icon p-4"></i>
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-mongodb-plain-wordmark colored skills-icon p-4"></i>
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-jupyter-plain-wordmark colored skills-icon p-4"></i>
            </div>
        </div>
    );
};

export default Skills;
