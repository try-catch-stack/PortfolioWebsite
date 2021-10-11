import React from 'react';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className="grid flex-grow content-center h-screen banner">
            <div className="flex justify-center ">
                {/* <Image className="bg-gray-600 rounded-full" src="/DM.png" width="200%" height="200%" /> */}
                <img
                    className=" rounded-full p-2 mb-8 md:mb-16 border-4 shadow-xl"
                    src="https://img.icons8.com/external-konkapp-outline-color-konkapp/200/000000/external-programmer-profession-avatar-konkapp-outline-color-konkapp.png"
                    height="200"
                    width="200"
                />
            </div>

            <div className="pt-4">
                <h2 className="flex justify-center text-4xl text-center">Hey, Welcome to my website!</h2>
                <h4 className="flex justify-center text-2xl m-4 text-center">
                    For me , {' <Code> '} is more than some bytes in a file.
                </h4>
            </div>
        </div>
    );
};

export default Banner;