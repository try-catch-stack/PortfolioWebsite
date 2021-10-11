import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { Sling as Hamburger } from 'hamburger-react';

export const Header = () => {
    const [dark, setDark] = useState(true);
    const [isOpen, setOpen] = useState(false);
    const toggleTheme = (e) => {
        dark ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
        setDark(!dark);
    };

    useEffect(() => {
        dark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    });

    const ToggleMenu = () => {
        const elemetsToToggle = document.getElementsByClassName('toggle');
        for (let i = 0; i < elemetsToToggle.length; i++) {
            elemetsToToggle.item(i).classList.toggle('hidden');
        }
        const banner = document.getElementsByClassName('body')[0];
        setOpen(!isOpen);
    };

    return (
        <div className="w-full fixed flex bg-primary dark:bg-navBg">
            <div className="rounded-full m-4 mr-0">
                <Image src="/Logo.png" height="50px" width="50px" />
            </div>

            <div className=" md:flex justify-end pl-0 p-4 w-full h-full ">
                <div className="toggle hidden justify-end pt-2 pb-4 md:py-0 md:flex md:order-last ">
                    <label className="flex items-center justify-end cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggle" className="sr-only" onChange={toggleTheme} />
                            <div className="bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div className="dot absolute right-1 top-1 bg-white w-6 h-6 rounded-full transition">
                                <div className="rounded-full p-1 dark:bg-gray-800">
                                    {dark ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="flex md:hidden justify-end order-first">
                    <button id="hamburgerButton" onClick={ToggleMenu}>
                        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.7} />
                    </button>
                </div>
                <div className="pr-14 toggle hidden md:flex justify-between items-center mx-auto text-navTextDark dark:text-white">
                    <Link href="/">
                        <a
                            onClick={ToggleMenu}
                            className="block md:inline-block mx-2 px-3 rounded md:rounded-lg md:hover:scale-105 hover:shadow-xl focus:outline focus:shadow-lg focus:bg-blue-200 border-b-2 border-gray-700 dark:border-gray-300 dark:focus:bg-blue-500 md:border-none py-2 mb-2 md:my-2"
                        >
                            Home
                        </a>
                    </Link>

                    <Link href="/">
                        <a
                            onClick={ToggleMenu}
                            className="block md:inline-block mx-2 px-3 rounded md:rounded-lg md:hover:scale-105 hover:shadow-xl focus:outline focus:shadow-lg focus:bg-blue-200 border-b-2 border-gray-700 dark:border-gray-300 dark:focus:bg-blue-500 md:border-none py-2 mb-2 md:my-2"
                        >
                            About Me
                        </a>
                    </Link>

                    <Link href="/">
                        <a
                            onClick={ToggleMenu}
                            className="block md:inline-block mx-2 px-3 rounded md:rounded-lg md:hover:scale-105 hover:shadow-xl focus:outline focus:shadow-lg focus:bg-blue-200 border-b-2 border-gray-700 dark:border-gray-300 dark:focus:bg-blue-500 md:border-none py-2 mb-2 md:my-2"
                        >
                            Skills
                        </a>
                    </Link>

                    <Link href="/">
                        <a
                            onClick={ToggleMenu}
                            className="block md:inline-block mx-2 px-3  rounded md:rounded-lg md:hover:scale-105 hover:shadow-xl focus:outline focus:shadow-lg focus:bg-blue-200 border-b-2 border-gray-700 dark:border-gray-300 dark:focus:bg-blue-500 md:border-none py-2 mb-2 md:my-2"
                        >
                            Projects
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
