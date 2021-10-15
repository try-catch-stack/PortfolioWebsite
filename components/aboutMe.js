import React from 'react';

const AboutMe = () => {
    return (
        <div className="grid pb-4 px-8 md:px-16 md:py-5 gap-4 bg-white dark:bg-primaryBg">
            {/* <h1 className="hidden md:flex md:row-span-3">Some Image/Gif</h1> */}
            <h1 className="place-self-center pt-8 pb-4 font-bold text-2xl lg:text-4xl text-headingTextDark dark:text-headingText">
                ABOUT ME
            </h1>
            <h4 className="row-span-2 text-xl pb-8 lg:text-2xl lg:px-20 xl:px-48">
                I'm Danish, an undergraduate engineering student at the Indian Institute of Technology BHU (IIT BHU).
                I'm a passionate programmer and a full stack developer.My areas of interest includes machine
                learning,data structures and algorithms and all sorts of software development.Open source is also
                something which I am interested in and looking forward to contribute to open source projects.
                <br />I am a tech enthusiast and love to explore new technologies.I also love to travel,explore new
                places and meet new people.
            </h4>
        </div>
    );
};

export default AboutMe;
