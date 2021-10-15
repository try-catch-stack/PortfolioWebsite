import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Banner = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    return (
        <div id="banner" className="grid flex-grow content-center bg-white border-0 dark:bg-primaryBg h-full pt-16">
            <div className="flex justify-center ">
                {/* <Image className="bg-gray-600 rounded-full" src="/DM.png" width="200%" height="200%" /> */}
                <img
                    className=" rounded-full p-2  md:mb-8 border-4 shadow-xl"
                    src="https://img.icons8.com/external-konkapp-outline-color-konkapp/200/000000/external-programmer-profession-avatar-konkapp-outline-color-konkapp.png"
                    height="200"
                    width="200"
                />
            </div>

            <div className="">
                <div className="flex justify-center text-2xl m-4 text-center">
                    For me , {' <Code> '} is more than some bytes in a file.
                </div>
            </div>
        </div>
    );
};

export default Banner;
