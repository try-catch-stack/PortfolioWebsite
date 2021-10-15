import React from 'react';

const AboutMe = () => {
    return (
        <div className="aboutMe">
            <div className="grid flex-grow content-center bg-white border-0 dark:bg-primaryBg h-full pt-16">
                <div className="flex justify-center ">
                    {/* <Image className="bg-gray-600 rounded-full" src="/DM.png" width="200%" height="200%" /> */}
                    <img
                        className=" rounded-full p-2  hover:scale-105  md:mb-8 border-4 shadow-xl"
                        src="https://img.icons8.com/external-konkapp-outline-color-konkapp/200/000000/external-programmer-profession-avatar-konkapp-outline-color-konkapp.png"
                        height="200"
                        width="200"
                    />
                </div>

                <div className="quote">
                    <div className="flex text-lg lg:text-xl m-4 justify-center text-center">
                        For me , {' <Code> '} is more than some bytes in a file.
                    </div>
                </div>
            </div>
            <div className="grid pb-4 px-8 md:px-16 md:py-5 gap-4 bg-white dark:bg-primaryBg">
                <h1 className="text-center pt-8 pb-4 font-bold text-2xl lg:text-4xl text-headingTextDark dark:text-headingText">
                    ABOUT ME
                </h1>
                <h4 className="text-lg pb-8 lg:text-2xl lg:px-20 xl:px-48 flex text-left">
                    I'm Danish, an undergraduate engineering student at the Indian Institute of Technology BHU (IIT
                    BHU). I'm a passionate programmer and a full stack developer.My areas of interest includes machine
                    learning,data structures and algorithms and all sorts of software development.Open source is also
                    something which I'm interested in and I'm looking forward to contribute to open source projects.
                    <br />I am a tech enthusiast and love to explore new technologies.I also love to travel,explore new
                    places and meet new people.
                </h4>
            </div>
        </div>
    );
};

export default AboutMe;
