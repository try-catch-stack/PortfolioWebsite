import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/banner';
import AboutMe from '../components/aboutMe';

export default function Home() {
    return (
        <>
            <Head>
                <title>Danish Ahmed Mirza</title>
                <link rel="icon" href="/fav.ico" />
            </Head>
            <div className="relative flex flex-col min-h-screen dark:bg-primaryBg dark:text-white">
                <Header />
                <div className="body">
                    <Banner />
                    <AboutMe />
                </div>
                {/* <div className="flex-grow"></div> */}
                <Footer />
            </div>
        </>
    );
}
