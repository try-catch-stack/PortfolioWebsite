import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import AboutMe from '../components/aboutMe';
import Skills from '../components/skills';

export default function Home() {
    return (
        <>
            <Head>
                <title>Danish Ahmed Mirza</title>
                <link rel="icon" href="/fav.ico" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
                ></link>
            </Head>
            <div className="relative flex flex-col min-h-screen dark:bg-primaryBg dark:text-white">
                <Header />
                <div className="body">
                    <Banner />
                    <AboutMe />
                    <Skills />
                </div>
                {/* <div className="flex-grow"></div> */}
                <Footer />
            </div>
        </>
    );
}
