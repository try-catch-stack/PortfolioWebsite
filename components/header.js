import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export const Header = () => {
    const [dark, setDark] = useState(true);

    const toggleTheme = (e) => {
        dark ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
        setDark(!dark);
    };

    useEffect(() => {
        dark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    });

    return (
        <div className="flex bg-primary dark:bg-gray-500">
            <div className="rounded-full m-4">
                <Image src="/Logo.png" height="50px" width="50px" />
            </div>
            <div className="flex  justify-end p-4 w-full h-full ">
                <ul className="flex justify-between items-center mx-auto text-navTextDark dark:text-navText">
                    <li>
                        <Link href="/">
                            <a className="block md:inline-block px-3">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="block md:inline-block px-3">About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="block md:inline-block px-3">Skills</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="block md:inline-block px-3">Projects</a>
                        </Link>
                    </li>
                </ul>
                <div className="flex">
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggle" className="sr-only" onChange={toggleTheme} />
                            <div className="bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div className="dot absolute right-1 top-1 bg-white w-6 h-6 rounded-full transition">
                                <div className="rounded-full p-1">
                                    {dark ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;
