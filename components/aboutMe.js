import React from 'react';

const AboutMe = () => {
    return (
        <div className="grid pb-4 px-16 md:p-16 grid-rows-3 grid-flow-col gap-4">
            <h1 className="hidden md:flex md:row-span-3">Some Image/Gif</h1>
            <h1 className="col-span-2 place-self-center">ABOUT ME</h1>
            <h4 className="col-span-2 row-span-2">
                I'm Danish, a passionate programmer and a full stack developer from India . I am currently pursuing my
                engineering from IIT BHU . I am a tech enthusiast and love to explore new technologies. I also love to
                travel,explore new places and meet new people.
            </h4>
        </div>
    );
};

export default AboutMe;
