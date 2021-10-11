import React from 'react';

const Skills = () => {
    return (
        <div className="grid grid-rows-2 w-full grid-flow-col gap-4 bg-skillsBgLight dark:bg-skillsBg">
            <div className="place-self-center p-4 lg:hidden text-4xl mt-4">Skill set</div>
            <div className="place-self-center p-4 hidden lg:block text-4xl mt-8">
                Languages and Technologies I have used
            </div>
            <div className="flex flex-wrap w-full justify-center skills-section">
                <i class="devicon-javascript-plain colored texts skills-icon p-4"></i>
                <i class="devicon-python-plain colored skills-icon p-4"></i>
                <i class="devicon-react-original colored skills-icon p-4"></i>
                <i class="devicon-nodejs-plain-wordmark colored skills-icon p-4"></i>
                <i class="devicon-cplusplus-plain-wordmark skills-icon p-4"></i>
                <i class="devicon-django-line-wordmark skills-icon p-4"></i>
                <i class="devicon-mongodb-plain-wordmark colored skills-icon p-4"></i>
                <i class="devicon-jupyter-plain-wordmark colored skills-icon p-4"></i>
            </div>
        </div>
    );
};

export default Skills;
