import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import AboutMe from '../components/aboutMe';
import Skills from '../components/skills';
import Projects from '../components/projects';
import ThreeDComponent from '../components/threeDComponent';
import BackgroundSpace from '../components/backgroundSpace';

export default function Home() {
    const [dark, setDark] = useState(true);

    return (
        <>
            <Head>
                <title>Danish Ahmed Mirza</title>
                <link rel="icon" href="/fav.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css" />
                <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet" />
            </Head>
            <div className="relative flex flex-col min-h-screen dark:bg-primaryBg dark:text-white">
                <Header dark={dark} setDark={setDark} />
                <ThreeDComponent dark={dark} />

                <div className="relative">
                    <BackgroundSpace />
                    <div className="absolute top-0 z-20">
                        <Banner />
                        <AboutMe />
                        <Skills />
                        <Projects />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
