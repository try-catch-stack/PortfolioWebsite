import React from 'react';

const AboutMe = () => {
    return (
        <div className="grid pb-4 px-8 md:p-16 grid-rows-3 grid-flow-col gap-4">
            <h1 className="hidden md:flex md:row-span-3">Some Image/Gif</h1>
            <h1 className="col-span-2 place-self-center text-2xl lg:text-4xl">ABOUT ME</h1>
            <h4 className="col-span-2 row-span-2 text-xl lg:text-2xl lg:px-20 xl:px-48">
                I'm Danish, an undergraduate engineering student at the Indian Institute of Technology BHU (IIT BHU).
                I'm a passionate programmer and a full stack developer.
                <br />I am a tech enthusiast and love to explore new technologies.I also love to travel,explore new
                places and meet new people.
            </h4>
        </div>
    );
};

export default AboutMe;
