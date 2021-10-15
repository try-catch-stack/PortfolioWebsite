import React from 'react';

const Skills = () => {
    return (
        <div className="grid w-full pb-12 lg:gap-4 bg-skillsBgLight dark:bg-skillsBg">
            <div className="place-self-center p-2  font-bold  text-2xl lg:text-4xl mt-4 text-headingTextDark dark:text-headingText">
                Skill set
            </div>
            <div className="place-self-center  font-bold  text-xl lg:text-2xl mb-4 mx-4 text-center text-headingTextDark dark:text-headingText">
                (Languages and technologies I have worked with)
            </div>
            {/* <div className="place-self-center p-4 hidden  font-bold lg:block text-4xl mt-8">
                Languages and Technologies I have used
            </div> */}
            <div className="flex flex-wrap w-full justify-center skills-section">
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-javascript-plain colored texts skills-icon p-4" />
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-python-plain colored skills-icon p-4" />
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-react-original colored skills-icon p-4" />
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-nodejs-plain-wordmark colored skills-icon p-4" />
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-cplusplus-plain-wordmark skills-icon p-4" />
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-django-line-wordmark skills-icon p-4" />
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-mongodb-plain-wordmark colored skills-icon p-4" />
                <i className="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-jupyter-plain-wordmark colored skills-icon p-4" />
                <i class="hover:shadow-xl dark:hover:shadow-2xl rounded-lg devicon-threejs-original-wordmark  skills-icon p-4 " />
            </div>
        </div>
    );
};

export default Skills;
