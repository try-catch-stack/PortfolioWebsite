import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen h-16">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="flex-grow"></div>
            <Footer />
        </div>
    );
}
